const { Test } = require("../../models/test.js");

const getAll = async (req, res) => {
  const result = await Test.find({}, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = getAll;
