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
    aadhar: {
      image: {
        type: String,
        secure_url: String,
        required: [true, "Aadhar card image is required"],
      },
      aadharNo: {
        type: String,
        required: [true, "Aadhar card number is required"],
        minlength: [12, "Aadhar number must be of 12 digit"],
        maxlength: [12, "Aadhar number can't be greater than 12 digit"],
      },
    },
    PAN: {
      image: {
        type: String,
        secure_url: String,
        required: [true, "PAN card image is required"],
      },
      PANno: {
        type: String,
        required: [true, "PAN card is required"],
        minlength: [10, "Aadhar number must be of 10 characters"],
        maxlength: [10, "Aadhar number can't be greater than 10 characters"],
      },
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
    aadhar: {
      image: {
        type: String,
        secure_url: String,
        required: [true, "Aadhar card image is required"],
      },
      aadharNo: {
        type: String,
        required: [true, "Aadhar card is required"],
        minlength: [12, "Aadhar number must be of 12 digit"],
        maxlength: [12, "Aadhar number can't be greater than 12 digit"],
      },
    },
    PAN: {
      image: {
        type: String,
        secure_url: String,
        required: [true, "PAN card image is required"],
      },
      PANno: {
        type: String,
        required: [true, "PAN card is required"],
        minlength: [10, "Aadhar number must be of 10 characters"],
        maxlength: [10, "Aadhar number can't be greater than 10 characters"],
      },
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
  cancelCheque: {
    type: String,
    secure_url: String,
    required: [true, "Cancel Cheque is required"],
  },
  bankStatement: {
    type: String,
    secure_url: String,
    required: [true, "Bank Statement is required"],
  },
  prescription: {
    type: String,
    secure_url: String,
    required: [true, "Prescription is required"],
  },
  BankDetails: {
    BankName: String,
    lendingModule: {
      type: String,
      required: [true, "Lending module is required"],
      enum: ["Cibilcheck", "E-nach"],
    },
    NetBanking: {
      type: String,
      required: [true, "Select yes or no for netbanking"],
      enum: ["yes", "no"],
    },
    DebitCard: {
      type: String,
      required: [true, "Select yes or no for Debit card"],
      enum: ["yes", "no"],
    },
    document: {
      type: String,
      secure_url: String,

      required: [true, "Attaching document is required"],
    },
  },
  OtherDetails: {
    smoking: {
      type: String,
      required: [true, "Select yes or no for Smoking"],
      enum: ["yes", "no"],
    },
    alcohol: {
      type: String,
      required: [true, "Select yes or no for alcohol"],
      enum: ["yes", "no"],
    },
    diabetes: {
      type: String,
      required: [true, "Select yes or no for diabetes"],
      enum: ["yes", "no"],
    },
    hypertension: {
      type: String,
      required: [true, "Select yes or no for hypertension"],
      enum: ["yes", "no"],
    },
    shared: {
      type: String,
      required: [true, "Select yes or no"],
      enum: ["yes", "no"],
    },
  },
});
module.exports = new mongoose.model("userBasicInfo", userSchema);
