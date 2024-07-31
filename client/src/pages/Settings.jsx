import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { userUpdateApi } from "../apis/User";
import styles from '../assets/Settings.module.css';

function Settings() {
    const token = useAuth();
    const navigate = useNavigate();

    const [input, setInput] = useState({ username: "", email: "", oldPassword: "", newPassword: "" });
    const [error, setError] = useState({ username: "", email: "", oldPassword: "", newPassword: "" });

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const userUpdate = async () => {
        const data = await userUpdateApi(input, token);
        if (data) navigate('/dashboard');
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return passwordRegex.test(password);
    };

    const validateForm = (e) => {
        e.preventDefault();

        let isError = false;
        setError(() => ({ username: "", email: "", oldPassword: "", newPassword: "" }));

        if (input.email && !validateEmail(input.email)) {
            isError = true;
            setError((error) => ({ ...error, email: 'Enter a valid email format' }));
        }

        if (input.oldPassword) {
            if (!validatePassword(input.oldPassword)) {
                isError = true;
                setError((error) => ({ ...error, oldPassword: 'Password must be 6+ chars, incl. letter & number' }));
            }
            if (!input.newPassword) {
                isError = true;
                setError((error) => ({ ...error, newPassword: 'New password is required' }));
            }
        }

        if (input.newPassword) {
            if (!validatePassword(input.newPassword)) {
                isError = true;
                setError((error) => ({ ...error, newPassword: 'Password must be 6+ chars, incl. letter & number' }));
            }
            if (!input.oldPassword) {
                isError = true;
                setError((error) => ({ ...error, oldPassword: 'Old password is required' }));
            }
        }

        if (!isError) userUpdate();
    };

    return (
        <main className={styles.settings}>
            <Link to="/dashboard"><img src="/icons/arrow-back.png" className="goback" alt="Go back" /></Link>
            <span className={styles.title}>Settings</span>
            <form onSubmit={validateForm} className={styles.form}>
                <div className={styles.inputs}>
                    <img src="/icons/user.png" alt="user icon" />
                    <input type="text" id="username" value={input.username} onChange={(e) => setInput({ ...input, username: e.target.value })} placeholder="Name" />
                    <label htmlFor="username" className="error">{error.username}</label>
                </div>
                <div className={styles.inputs}>
                    <img src="/icons/mail.png" alt="mail icon" />
                    <input type="email" className={error.email && 'error'} id="email" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} placeholder="Update Email" />
                    <label htmlFor="email" className="error">{error.email}</label>
                </div>
                <div className={styles.inputs}>
                    <img src="/icons/lock.png" alt="lock icon" />
                    <input type={showOldPassword ? 'text' : 'password'} className={error.oldPassword && 'error'} id="oldPassword" value={input.oldPassword} onChange={(e) => setInput({ ...input, oldPassword: e.target.value })} placeholder="Old Password" />
                    <label htmlFor="oldPassword" className="error">{error.oldPassword}</label>
                    <img src="/icons/eye-open.png" onClick={() => setShowOldPassword(!showOldPassword)} alt="eye-open icon" />
                </div>
                <div className={styles.inputs}>
                    <img src="/icons/lock.png" alt="lock icon" />
                    <input type={showNewPassword ? 'text' : 'password'} className={error.newPassword && 'error'} id="newPassword" value={input.newPassword} onChange={(e) => setInput({ ...input, newPassword: e.target.value })} placeholder="New Password" />
                    <label htmlFor="newPassword" className="error">{error.newPassword}</label>
                    <img src="/icons/eye-open.png" onClick={() => setShowNewPassword(!showNewPassword)} alt="eye-open icon" />
                </div>
                <button className={styles.btnSubmit}>Update</button>
            </form>
            <Link to="/login" onClick={() => localStorage.removeItem('authToken')} className={styles.logout}>
                <img src="/icons/arrow-out.png" alt="arrow-out icon" />
                <span>Log out</span>
            </Link>
        </main>
    )
}

export default Settings