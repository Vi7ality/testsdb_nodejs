const { Test } = require("../../models/test.js");

const getAllAssigned = async (req, res) => {
  const userId = String(req.user._id);
  const result = await Test.find({ assigned: userId }, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = getAllAssigned;
