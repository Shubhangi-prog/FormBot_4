const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
const { fetchAllFolder, fetchAllFormByFolder, createFolder, deleteFolder } = require('../controllers/Folder');

router.get('/folder/view', verifyToken, fetchAllFolder);
router.get('/folder/view/:folderId', verifyToken, fetchAllFormByFolder);
router.post('/folder/create', verifyToken, createFolder);
router.delete('/folder/delete/:folderId', verifyToken, deleteFolder);

module.exports = router;