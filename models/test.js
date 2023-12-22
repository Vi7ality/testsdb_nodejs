const { Schema, model } = require("mongoose");

const testSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    mark: {
      type: Number,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Test = model("test", testSchema);

module.exports = Test;
