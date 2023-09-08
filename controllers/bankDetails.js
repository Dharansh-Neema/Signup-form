let redisClient = require("../config/redisClientConfig");
const cloudinary = require("../config/cloudinaryConfig");
exports.bankDetails = async (req, res) => {
  try {
    const id = req.cookies.id;
    const { lendingModule, NetBanking, DebitCard, BankName } = req.body;
    const { document } = req.files;
    if (!lendingModule || !NetBanking || !DebitCard || !document)
      throw new Error("Fields marked with * are required");
    const uploadedDocument = cloudinary.uploader.upload(document.tempFilePath, {
      folder: "Varlyq",
    });
    redisClient = await redisClient();
    redisClient.set(`${id}:lendingModule`, lendingModule);
    redisClient.set(`${id}:NetBanking`, NetBanking);
    redisClient.set(`${id}:DebitCard`, DebitCard);
    redisClient.set(`${id}:BankName`, BankName);
    redisClient.set(`${id}:document`, (await uploadedDocument).secure_url);
    res
      .status(200)
      .json({ success: true, message: "Bank details saved on redis" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, error: error.message });
  }
};
