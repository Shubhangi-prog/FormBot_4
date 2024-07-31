import React from 'react';
import styles from '../../assets/Share.module.css';

function UserContent({ item, index, getInputValue, setIsSubmit, disableFlagArr, activeRating, setActiveRating }) {
    const { type, value } = item.data;

    if (type === 'Text' || type === 'Number' || type === 'Email' || type === 'Phone' || type === 'Date') {
        return (
            <form className={styles.inputs} onSubmit={(e) => setIsSubmit(item.key, e)}>
                <input type={type} id={item.key} onChange={(e) => getInputValue(item.key, e.target.value)} placeholder={`Enter Your ${type}`} autoComplete="off" required disabled={disableFlagArr[index]} />
                <button className={styles.submitBtn} disabled={disableFlagArr[index]}>
                    <img src="/icons/send.png" alt="send icon" />
                </button>
            </form>
        );
    } else if (type === 'Rating') {
        return (
            <div className={styles.inputs}>
                <div className={`${styles.rating} ${disableFlagArr[index] ? styles.disabled : ''}`}>
                    {[1, 2, 3, 4, 5].map((i, idx) => (
                        <button key={i} className={activeRating === idx ? styles.activeRating : ''} onClick={() => { getInputValue(item.key, i); setActiveRating(idx); }}>{i}</button>
                    ))}
                </div>
                <button className={styles.submitBtn} onClick={() => setIsSubmit(item.key)} disabled={disableFlagArr[index]}>
                    <img src="/icons/send.png" alt="send icon" />
                </button>
            </div>
        );
    } else if (type === 'Button') {
        return (
            <button key={index} className={styles.inputBtn} onClick={() => { getInputValue(item.key, value); setIsSubmit(item.key); }} disabled={disableFlagArr[index]}>{value}</button>
        );
    } else {
        return null;
    }
}

export default UserContent