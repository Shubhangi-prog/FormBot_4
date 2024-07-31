const Form = require('../models/Form');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const validateFormData = async (formId) => {
    if (!ObjectId.isValid(formId)) {
        throw Object.assign(Error("This form is not valid, please check your URL"), { code: 400 });
    }

    const formdata = await Form.findById(formId);
    if (!formdata) {
        throw Object.assign(Error("This form is not valid, please check your URL."), { code: 404 });
    }

    return formdata;
};

const createForm = async (req, res, next) => {
    try {
        const userId = req.user;
        const { folderId, formName } = req.body;
        if (!formName) throw Object.assign(Error("Please enter form name."), { code: 400 });

        const newForm = await Form.create({ userId, folderId, formName, formTheme: "#ffffff" });
        res.status(200).json({ status: "success", formId: newForm._id, msg: "Form created, start adding your flow." });
    } catch (err) {
        next(err);
    }
};

const fetchAllForm = async (req, res, next) => {
    try {
        const formdata = await Form.find({ userId: req.user, folderId: null });
        res.status(200).json({ status: "success", data: formdata });
    } catch (err) {
        next(err);
    }
};

const fetchFormById = async (req, res, next) => {
    const { formId } = req.params;
    try {
        const formdata = await validateFormData(formId);
        res.status(200).json({ status: "success", data: formdata });
    } catch (err) {
        next(err);
    }
};

const updateForm = async (req, res, next) => {
    const { formId } = req.params;
    try {
        await validateFormData(formId);
        const { formName, formTheme, formSequence } = req.body;
        await Form.findByIdAndUpdate(formId, { formName, formTheme, formSequence });
        res.status(200).json({ status: "success", msg: "Form updated successfully." });
    } catch (err) {
        next(err);
    }
};

const deleteForm = async (req, res, next) => {
    const { formId } = req.params;
    try {
        await validateFormData(formId);
        await Form.findByIdAndDelete(formId);
        res.status(200).json({ status: "success", msg: "Form deleted successfully." });
    } catch (err) {
        next(err);
    }
};

const shareForm = async (req, res, next) => {
    const { formId } = req.params;
    try {
        const formdata = await validateFormData(formId);
        res.status(200).json({ status: "success", data: formdata });
    } catch (err) {
        next(err);
    }
};

const countFormHit = async (req, res, next) => {
    const { formId } = req.params;
    try {
        const formdata = await validateFormData(formId);
        const formHits = formdata.formHits + 1;
        await Form.findByIdAndUpdate(formId, { formHits });
        res.status(200).json({ status: "success", msg: "Hit count : " + formHits });
    } catch (err) {
        next(err);
    }
};

const saveFormResponse = async (req, res, next) => {
    const { formId } = req.params;
    try {
        const formdata = await validateFormData(formId);
        const formResponse = req.body;

        const index = formdata.formResponse.findIndex(
            response => response.vid === formResponse.vid
        );

        if (index !== -1) {
            formdata.formResponse[index] = formResponse;
        } else {
            formdata.formResponse.push(formResponse);
        }
        await formdata.save();

        res.status(200).json({ status: "success", data: formdata });
    } catch (err) {
        next(err);
    }
};

module.exports = { fetchAllForm, fetchFormById, createForm, updateForm, deleteForm, shareForm, countFormHit, saveFormResponse };