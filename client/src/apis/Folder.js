import axios from 'axios';
import { toast } from 'react-toastify';
import { handleApiRes, handleApiErr } from '../utils/apiUtils';
const baseURL = import.meta.env.VITE_API_BASE_URL;

export const createFolderApi = async (folderName, token) => {
    try {
        const response = await axios.post(`${baseURL}/folder/create`, { folderName }, {
            headers: { Authorization: `Bearer ${token}` }
        });

        const { status, msg } = response.data;
        if (status === 'success') {
            toast.success(msg);
            return true;
        } else {
            handleApiRes(response.data);
        }
    } catch (error) {
        handleApiErr(error, navigate);
    }
};

export const fetchAllFolderApi = async (token) => {
    try {
        const response = await axios.get(`${baseURL}/folder/view`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        const { status, data } = response.data;
        if (status === 'success') {
            return data;
        } else {
            handleApiRes(response.data);
        }
    } catch (error) {
        handleApiErr(error, navigate);
    }
};

export const fetchAllFormByFolderApi = async (folderId, token) => {
    try {
        const response = await axios.get(`${baseURL}/folder/view/${folderId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        const { status, data } = response.data;
        if (status === 'success') {
            return data;
        } else {
            handleApiRes(response.data);
        }
    } catch (error) {
        handleApiErr(error, navigate);
    }
};

export const deleteFolderApi = async (folderId, token) => {
    try {
        const response = await axios.delete(`${baseURL}/folder/delete/${folderId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        const { status, msg } = response.data;
        if (status === 'success') {
            toast.success(msg);
            return true;
        } else {
            handleApiRes(response.data);
        }
    } catch (error) {
        handleApiErr(error, navigate);
    }
};