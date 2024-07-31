const Folder = require('../models/Folder');
const Form = require('../models/Form');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const validateFolderData = async (folderId) => {
    if (!ObjectId.isValid(folderId)) {
        throw Object.assign(Error("This is not a valid folder, please check your URL"), { code: 400 });
    }

    const folderdata = await Folder.findById(folderId);
    if (!folderdata) {
        throw Object.assign(Error("This is not a valid folder, please check your URL."), { code: 404 });
    }

    return folderdata;
};

const createFolder = async (req, res, next) => {
    try {
        const userId = req.user;
        const { folderName } = req.body;
        if (!folderName) throw Object.assign(Error("Please enter folder name."), { code: 400 });

        await Folder.create({ userId, folderName });
        res.status(200).json({ status: "success", msg: "Folder created successfully." });
    } catch (err) {
        next(err);
    }
};

const fetchAllFolder = async (req, res, next) => {
    try {
        const folderdata = await Folder.find({ userId: req.user });
        res.status(200).json({ status: "success", data: folderdata });
    } catch (err) {
        next(err);
    }
};

const fetchAllFormByFolder = async (req, res, next) => {
    const { folderId } = req.params;
    try {
        await validateFolderData(folderId);
        const formdata = await Form.find({ folderId });
        res.status(200).json({ status: "success", data: formdata });
    } catch (err) {
        next(err);
    }
};

const deleteFolder = async (req, res, next) => {
    const { folderId } = req.params;
    try {
        await validateFolderData(folderId);
        await Folder.findByIdAndDelete(folderId);
        await Form.deleteMany({ folderId });
        res.status(200).json({ status: "success", msg: "Folder deleted successfully." });
    } catch (err) {
        next(err);
    }
};

module.exports = { fetchAllFolder, fetchAllFormByFolder, createFolder, deleteFolder };