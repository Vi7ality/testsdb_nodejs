const {
  Test,
  test: { schemas },
} = require("../../models/index");
const { HttpError } = require("../../helpers/index");

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

module.exports = updateCompleted;
