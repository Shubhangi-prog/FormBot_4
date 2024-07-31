const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    formName: {
        type: String,
        required: true,
    },
    formSequence: {
        type: Array
    },
    formTheme: {
        type: String,
        required: true,
    },
    formHits: {
        type: Number,
        default: 0,
    },
    formResponse: {
        type: Array
    },
    folderId: {
        type: mongoose.ObjectId,
    },
    userId: {
        type: mongoose.ObjectId,
    }
});

module.exports = mongoose.model('Form', formSchema);