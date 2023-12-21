const Test = required("../models/test.js");

const getAll = async (req, res) => {
  const result = await Test.find();
  res.json(result);
};
