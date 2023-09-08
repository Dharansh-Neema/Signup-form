let redisClient = require("../config/redisClientConfig");
const userInfo = require("../models/userInfo");
exports.otherDetails = async (req, res) => {
  try {
    const id = req.cookies.id;
    const { smoking, alcohol, diabetes, shared, hypertension } = req.body;
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, error: error.message });
  }
};
