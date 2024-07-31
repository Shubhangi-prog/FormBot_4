import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import { fetchFormByIdApi, updateFormApi } from "../apis/Form";
import Navbar from '../components/Navbar';
import cstyles from '../assets/Chatbox.module.css';
import styles from '../assets/Theme.module.css';

function Theme() {
    const token = useAuth();
    const [searchParams] = useSearchParams();

    const [formId, setFormId] = useState(searchParams.get('wid'));
    const [currentTheme, setCurrentTheme] = useState('#fff');

    const themes = [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#171923" },
        { name: "blue", value: "#508C9B" }
    ];

    const fetchFormById = async () => {
        const data = await fetchFormByIdApi(formId, token);
        if (data) setCurrentTheme(data.formTheme);
    };

    const changeTheme = async (formTheme) => {
        setCurrentTheme(formTheme);
        const data = await updateFormApi(formId, { formTheme }, token);
        if (data) toast.success("Theme updated successfully.");
    };

    useEffect(() => {
        if (token) {
            if (formId) fetchFormById();
        }
    }, [token]);

    return (
        <main className={styles.theme}>
            <Navbar />
            <div className={styles.sidebar}>
                <span className={styles.title}>Customize the theme</span>
                <hr className={styles.hr} />
                {themes.map((theme, key) => (
                    <div key={key} className={`${styles.card} ${currentTheme === theme.value && styles.active}`} onClick={() => changeTheme(theme.value)}>
                        <img src={`/images/theme-${theme.name}.jpg`} alt={`${theme.name} Theme`} />
                        <span className={styles.type}>{theme.name}</span>
                    </div>
                ))}
            </div>
            <div className={styles.content} style={{ background: currentTheme }}>
                <div className={cstyles.chatbox}>
                    <div className={cstyles.admin}>
                        <img className={cstyles.chatHead} src="/images/vectors/chat-head.png" alt="admin chat-head" />
                        <div className={cstyles.chat}>
                            <span>Hello!</span>
                        </div>
                    </div>
                    <div className={cstyles.user}>
                        <div className={cstyles.chat}>
                            <button className={cstyles.click}>Hi!</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Theme