const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  patient: {
    name: {
      type: String,
      required: [true, "Name of patient is required"],
      maxlength: [40, "Name can't be greater than 40 chars"],
    },
    email: {
      type: String,
      unique: [true, "Duplicate email not allowed"],
      required: [true, "Email of the Patient is required"],
      validate: [validator.isEmail, "Invalid email"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      minlength: [6, "Mobile number can't be less than 6 characters"],
    },
  },
  policyHolder: {
    name: {
      type: String,
      required: [true, "Name of Policy Holder is required"],
      maxlength: [40, "Name can't be greater than 40 chars"],
    },
    email: {
      type: String,
      unique: [true, "Duplicate email not allowed"],
      required: [true, "Email of the Policy holder is required"],
      validate: [validator.isEmail, "Invalid email"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      minlength: [6, "Mobile number can't be less than 6 characters"],
    },
  },
  agent: {
    name: {
      type: String,
      required: [true, "Name of Agent is required"],
      maxlength: [40, "Name can't be greater than 40 chars"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      minlength: [6, "Mobile number can't be less than 6 characters"],
    },
  },
});
module.exports = new mongoose.model("userBasicInfo", userSchema);
