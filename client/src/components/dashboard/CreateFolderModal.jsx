import React from 'react';
import styles from '../../assets/Dashboard.module.css';

function CreateFolderModal({ folderName, folderNameError, onNameChange, onCreate, onClose }) {
    return (
        <div className={styles.createFolderModal}>
            <span>Create New Folder</span>
            <form>
                <div className={styles.inputs}>
                    <input type="text" className={folderNameError ? 'error' : ''} value={folderName} onChange={onNameChange} placeholder="Enter folder name" />
                    <label className="error">{folderNameError}</label>
                </div>
                <div className={styles.action}>
                    <span className={styles.confirm} onClick={onCreate}>Done</span>
                    <span></span>
                    <span className={styles.cancel} onClick={onClose}>Cancel</span>
                </div>
            </form>
        </div>
    );
}

export default CreateFolderModal