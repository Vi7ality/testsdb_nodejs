const Test = require("../models/test.js");
const { ctrlWrapper } = require("../helpers/index");

const getAll = async (req, res) => {
  const result = await Test.find();
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
