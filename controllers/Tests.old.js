const { Test, schemas } = require("../models/test.js");
const { ctrlWrapper, HttpError } = require("../helpers/index");

const getAll = async (req, res) => {
  const result = await Test.find({}, "-createdAt -updatedAt");
  res.json(result);
};

const getAllAssigned = async (req, res) => {
  const userId = String(req.user._id);
  const result = await Test.find({ assigned: userId }, "-createdAt -updatedAt");
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Test.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateCompleted = async (req, res) => {
  const { id } = req.params;
  const test = await Test.findById(id);
  if (test.isCompleted === true) {
    throw HttpError(409, "You cannot modify completed test");
  }
  const { error } = schemas.updateCompletedSchema.validate(req.body);
  if (error) {
    throw HttpError(400, "missing field");
  }

  const result = await Test.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getAllAssigned: ctrlWrapper(getAllAssigned),
  updateCompleted: ctrlWrapper(updateCompleted),
  getById: ctrlWrapper(getById),
};
