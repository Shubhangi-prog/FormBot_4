import React from 'react';
import styles from '../../assets/Dashboard.module.css';

function DeleteModal({ entityType, onDelete, onClose }) {
    return (
        <div className={styles.deleteFolderModal}>
            <span>Are you sure you want to delete this {entityType}?</span>
            <div className={styles.action}>
                <span className={styles.confirm} onClick={onDelete}>Confirm</span>
                <span></span>
                <span className={styles.cancel} onClick={onClose}>Cancel</span>
            </div>
        </div>
    );
}

export default DeleteModal