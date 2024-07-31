import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/Dashboard.module.css';

function FormCard({ forms, onDelete }) {
    return (
        <>
            {forms.map((form, key) => (
                <div className={styles.formCard} key={key}>
                    <img className={styles.delete} src="/icons/delete.png" onClick={() => onDelete(form._id, 'form')} width={20} alt="trash icon" />
                    <Link to={`/workspace?wid=${form._id}`} className={`${styles.card} ${styles.created}`}>
                        <span>{form.formName}</span>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default FormCard