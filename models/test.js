const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers/index");
const Joi = require("joi");

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

testSchema.post("save", handleMongooseError);

const updateCompletedSchema = Joi.object({
  isCompleted: Joi.boolean().required(),
  mark: Joi.string().required(),
});

const schemas = {
  updateCompletedSchema,
};

const Test = model("test", testSchema);

module.exports = { Test, schemas };
