import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/Dashboard.module.css';

function FolderButton({ folders, onDelete }) {
    const navigate = useNavigate();

    return (
        <>
            {folders.map((folder, key) => (
                <button className={styles.createOpen} key={key}>
                    <span onClick={() => navigate(`/folder/${folder._id}`)}>{folder.folderName}</span>
                    <img src="/icons/delete.png" onClick={() => onDelete(folder._id)} alt="trash icon" />
                </button>
            ))}
        </>
    );
}

export default FolderButton