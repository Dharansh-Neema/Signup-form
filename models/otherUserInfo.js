const mongoose = require("mongoose");
const informationSchema = new mongoose.Schema({
  user: {
    id: mongoose.Schema.Types.ObjectId,
    ref: "userBasicInfo",
  },
  aadharNumber: {
    image: {
      id: String,
      public_url: String,
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
});
