let redisClient = require("../config/redisClientConfig");
const userInfo = require("../models/userInfo");
exports.otherDetails = async (req, res) => {
  try {
    const id = req.cookies.id;
    const { smoking, alcohol, diabetes, shared, hypertension } = req.body;

    //Data from basicInfo form
    const patientName = await redisClient.get(`${id}:patientName`);
    const patientEmail = await redisClient.get(`${id}:patientEmail`);
    const patientMobile = await redisClient.get(`${id}:patientMobile`);
    const PHname = await redisClient.get(`${id}:PHname`);
    const PHemail = await redisClient.get(`${id}:PHemail`);
    const PHMobile = await redisClient.get(`${id}:PHMobile`);
    const AgentName = await redisClient.get(`${id}:AgentName`);
    const AgentMobile = await redisClient.get(`${id}:AgentMobile`);

    //Data from document upload
    const patientAadharNo = await redisClient.get(`${id}:patientAadharNo`);
    const patientAadharCard = await redisClient.get(`${id}:patientAadharCard`);
    const patientPAN = await redisClient.get(`${id}:patientPAN`);
    const patientPANcard = await redisClient.get(`${id}:patientPANcard`);

    const policyAadharNo = await redisClient.get(`${id}:policyAadharNo`);
    const policyAadharCard = await redisClient.get(`${id}:policyAadharCard`);

    const policyPAN = await redisClient.get(`${id}:policyPAN`);
    const policyPANcard = await redisClient.get(`${id}:policyPANcard`);

    const cancelCheque = await redisClient.get(`${id}:cancelCheque`);
    const bankStatement = await redisClient.get(`${id}:bankStatement`);
    const prescription = await redisClient.get(`${id}:prescription`);

    //Data from bank details
    const lendingModule = await redisClient.get(`${id}:lendingModule`);
    const NetBanking = await redisClient.get(`${id}:NetBanking`);
    const DebitCard = await redisClient.get(`${id}:DebitCard`);
    const BankName = await redisClient.get(`${id}:BankName`);
    const document = await redisClient.get(`${id}:document`);

    //Saving data to database
    const response = await userInfo.create({
      patient: {
        name: patientName,
        email: patientEmail,
        mobile: patientMobile,
        aadhar: { image: patientAadharCard, aadharNo: patientAadharNo },
        PAN: { image: patientPANcard, PANno: patientPAN },
      },

      policyHolder: {
        name: PHname,
        email: PHemail,
        mobile: PHMobile,
        aadhar: { image: policyAadharCard, aadharNo: policyAadharNo },
        PAN: { image: policyPANcard, PANno: policyPAN },
      },

      agent: { name: AgentName, mobile: AgentMobile },

      cancelCheque: cancelCheque,
      bankStatement: bankStatement,
      prescription: prescription,

      BankDetails: {
        BankName: BankName,
        lendingModule: lendingModule,
        NetBanking: NetBanking,
        DebitCard: DebitCard,
        document: document,
      },

      OtherDetails: {
        smoking: smoking,
        alcohol: alcohol,
        diabetes: diabetes,
        hypertension: hypertension,
        shared: shared,
      },
    });
    await response.save();
    redisClient.FLUSHDB();
    res.status(200).json({
      success: true,
      message: "Data saved to DB",
      response,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, error: error.message });
  }
};
