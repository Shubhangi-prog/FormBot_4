const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
    folderName: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.ObjectId,
    }
});

module.exports = mongoose.model('Folder', folderSchema);