const userInfo = require("../models/userInfo");
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
    const response = await userInfo.create({
      patient: {
        name: patientName,
        email: patientEmail,
        mobile: patientMobile,
      },
      policyHolder: { name: PHname, email: PHemail, mobile: PHMobile },
      agent: { name: AgentName, mobile: AgentMobile },
    });
    await response.save();
    res.status(200).json({ success: true, response });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};
