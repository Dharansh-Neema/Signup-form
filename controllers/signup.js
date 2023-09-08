const userInfo = require("../models/userInfo");
let redisClient = require("../config/redisClientConfig");
const { v4: uuidv4 } = require("uuid");
exports.home = async (req, res) => {
  res.send("<h3>Hey there</h3>");
};
exports.signupBasicInfo = async (req, res) => {
  try {
    const {
      patientName,
      patientEmail,
      patientMobile,
      PHname,
      PHemail,
      PHMobile,
      AgentName,
      AgentMobile,
    } = req.body;
    const id = uuidv4();
    console.log(id);
    // redisClient.on("error", (err) => {
    //   console.error("Redis client error", err);
    // });
    redisClient = await redisClient();
    redisClient.set(`${id}:patientName`, patientName);
    redisClient.set(`${id}:patientEmail`, patientEmail);
    redisClient.set(`${id}:patientMobile`, patientMobile);
    redisClient.set(`${id}:PHname`, PHname);
    redisClient.set(`${id}:PHemail`, PHemail);
    redisClient.set(`${id}:PHMobile`, PHMobile);
    redisClient.set(`${id}:AgentName`, AgentName);
    redisClient.set(`${id}:AgentMobile`, AgentMobile);

    console.log(response);
    let options = { maxAge: 1000 * 60 * 60 * 24, httpOnly: true };
    res.status(200).cookie("id", id, options).json({
      success: true,
      message: "Basic info saved successfully ",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};
