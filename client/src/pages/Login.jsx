import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userLoginApi } from "../apis/User";
import styles from '../assets/Auth.module.css';

function Login() {
    const navigate = useNavigate();
    
    const [input, setInput] = useState({ email: "", password: "" });
    const [error, setError] = useState({ email: "", password: "" });

    const userLogin = async () => {
        const token = await userLoginApi(input);
        if (token) {
            localStorage.setItem('authToken', token);
            navigate('/dashboard');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (e) => {
        e.preventDefault();

        let isError = false;
        setError(() => ({ email: "", password: "" }));

        Object.keys(input).forEach((key) => {
            const element = input[key];
            if (typeof element === 'string' && element.trim().length === 0) {
                isError = true;
                setError((error) => ({ ...error, [key]: "This field is required" }));
            } else if (key === 'email' && !validateEmail(element)) {
                isError = true;
                setError((error) => ({ ...error, [key]: "Enter a valid email Id" }));
            } else if (key === 'password' && element.trim().length < 6) {
                isError = true;
                setError((error) => ({ ...error, [key]: "Password must be 6 characters long" }));
            }
        });

        if (!isError) userLogin();
    };

    return (
        <main className={styles.auth}>
            <Link to="/"><img src="/icons/arrow-back.png" className="goback" alt="Go back" /></Link>
            <form className={styles.form} onSubmit={validateForm}>
                <div className={styles.inputs}>
                    <label htmlFor="email">Email</label>
                    <input type="email" className={error.email && 'error'} id="email" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} placeholder="Enter your email" />
                    <label htmlFor="email" className="error">{error.email}</label>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className={error.password && 'error'} id="password" value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} placeholder="*******" />
                    <label htmlFor="password" className="error">{error.password}</label>
                </div>
                <button>Log In</button>
            </form>
            <span>Don't have an account? <Link to="/register">Register now</Link></span>
            <img className={`${styles.vector} ${styles.triangleLayer}`} src="/images/vectors/triangle-layer.png" width={240} alt="triangle-layer vector" />
            <img className={`${styles.vector} ${styles.ellipsePink}`} src="/images/vectors/ellipse-pink.png" width={80} alt="ellipse-pink vector" />
            <img className={`${styles.vector} ${styles.ellipseYellow}`} src="/images/vectors/ellipse-yellow.png" height={80} alt="ellipse-yellow vector" />
        </main>
    )
}

export default Login