import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { fetchAllFormByFolderApi } from "../apis/Folder";
import { deleteFormApi } from "../apis/Form";

import FormCard from '../components/dashboard/FormCard';
import DeleteModal from '../components/dashboard/DeleteModal';

import styles from '../assets/Dashboard.module.css';

function Folders() {
    const token = useAuth();

    const { fid } = useParams();
    const [allForm, setAllForm] = useState([]);
    const [formId, setFormId] = useState(null);

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    const openDeleteModal = (id) => {
        setFormId(id); setDeleteModalOpen(true);
    };

    const fetchAllFormByFolder = async () => {
        const data = await fetchAllFormByFolderApi(fid, token);
        if (data) setAllForm(data);
    };

    const deleteForm = async () => {
        const data = await deleteFormApi(formId, token);
        if (data) { setDeleteModalOpen(false); fetchAllFormByFolder(); };
    };

    useEffect(() => {
        if (token) fetchAllFormByFolder();
    }, [token]);

    return (
        <div className={styles.section}>
            <Link to="/dashboard"><img src="/icons/arrow-back.png" className="goback" alt="Go back" /></Link>
            <div className={styles.forms}>
                <Link to={`/workspace?fid=${fid}`} className={styles.card}>
                    <img src="/icons/plus.png" alt="plus icon" />
                    <span>Create a typebot</span>
                </Link>
                <FormCard
                    forms={allForm}
                    onDelete={openDeleteModal}
                />
                {isDeleteModalOpen &&
                    <DeleteModal
                        entityType="form"
                        onDelete={deleteForm}
                        onClose={() => setDeleteModalOpen(false)}
                    />
                }
            </div>
        </div>
    )
}

export default Folders