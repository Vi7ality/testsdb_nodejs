const { Test } = require("../../models/test.js");
const { HttpError } = require("../../helpers/index");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Test.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getById;
