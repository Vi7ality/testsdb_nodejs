const { Test, schemas } = require("../models/test.js");
const { ctrlWrapper } = require("../helpers/index");

const getAll = async (req, res) => {
  const result = await Test.find({}, "-createdAt -updatedAt");
  res.json(result);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Test.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateCompleted = async (req, res) => {
  const { error } = schemas.updateCompletedSchema.validate(req.body);
  if (error) {
    throw HttpError(400, "missing field");
  }
  const { id } = req.params;

  const result = await Test.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  updateCompleted: ctrlWrapper(updateCompleted),
  getById: ctrlWrapper(getById),
};
