const { Schema, model } = require("mongoose");

const testSchema = new Schema({
  title: String,
  mark: Number,
  isCompleted: Boolean,
});

const Test = model("test", testSchema);

module.exports = Test;
