const { ctrlWrapper } = require("../../middlewares/index");

const getAll = require("./getAll");
const getAllAssigned = require("./getAllAssigned");
const getById = require("./getById");
const updateCompleted = require("./updateCompleted");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getAllAssigned: ctrlWrapper(getAllAssigned),
  updateCompleted: ctrlWrapper(updateCompleted),
  getById: ctrlWrapper(getById),
};
