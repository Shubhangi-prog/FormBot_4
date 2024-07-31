const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userdata = await User.findOne({ email: email });

        if (userdata) {
            if (await bcrypt.compare(password, userdata.password)) {
                const token = jwt.sign({ uid: userdata._id }, process.env.JWT_SECRET);
                res.status(200).json({ status: "success", msg: "Login successful.", token });
            } else {
                throw Object.assign(Error("Wrong password entered."), { code: 401 });
            }
        } else {
            throw Object.assign(Error("No user found with this email."), { code: 404 });
        }
    } catch (err) {
        next(err);
    }
};

const registerUser = async (req, res, next) => {
    try {
        const { username, email, confirmPassword } = req.body;
        if (await User.findOne({ email: email })) {
            throw Object.assign(Error("User with this email already exists."), { code: 409 });
        } else {
            const hashedPassword = await bcrypt.hash(confirmPassword, 10);
            await User.create({ username, email, password: hashedPassword });
            res.status(200).json({ status: "success", msg: "Registred successfully. Please login now." });
        }
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const userId = req.user;
        const { username, email, oldPassword, newPassword } = req.body;
        const userdata = await User.findOne({ _id: userId });

        if (userdata) {
            const updatedata = {};
            if (username) updatedata.username = username;
            if (email) {
                if (await User.findOne({ email: email })) {
                    throw Object.assign(Error("User with this email already exists."), { code: 409 });
                }
                updatedata.email = email
            }

            if (newPassword) {
                if (!await bcrypt.compare(oldPassword, userdata.password)) {
                    throw Object.assign(Error("Your old password seems to be incorrect."), { code: 409 });
                }
                if (await bcrypt.compare(oldPassword, userdata.password) == await bcrypt.compare(newPassword, userdata.password)) {
                    throw Object.assign(Error("New password can not be same as old password."), { code: 409 });
                }
                updatedata.password = await bcrypt.hash(newPassword, 10);
            }

            if (Object.keys(updatedata).length === 0) {
                res.status(200).json({ status: "success", msg: "You have not set anything to updated." });
            }

            await User.findByIdAndUpdate(userId, updatedata);
            res.status(200).json({ status: "success", msg: "Profile updated successfully." });
        } else {
            throw Object.assign(Error("Not a valid user, please relogin."), { code: 404 });
        }
    } catch (err) {
        next(err);
    }
};

const userDashboard = async (req, res, next) => {
    try {
        const userdata = await User.findOne({ _id: req.user });
        res.status(200).json({ status: "success", data: userdata });
    } catch (err) {
        next(err);
    }
};

module.exports = { loginUser, registerUser, updateUser, userDashboard };