const cloudinary = require("../config/cloudinaryConfig");
let redisClient = require("../config/redisClientConfig");

exports.documentUpload = async (req, res) => {
  try {
    //getting the id
    const id = req.cookies.id;
    console.log(id);
    //Getting the input
    const {
      patientAadharNo,
      patientPANnumber,
      policyPANnumber,
      policyAadharNo,
    } = req.body;
    const {
      patientAadharCard,
      patientPANcard,
      policyPANcard,
      policyAadharCard,
      cancelCheque,
      bankStatment,
      prescription,
    } = req.files;
    if (
      !patientAadharNo ||
      !patientPANnumber ||
      !policyPANnumber ||
      !policyAadharNo
    )
      throw new Error(
        "Aadhar and Pan card number is required for both paitent and policy holder"
      );
    if (
      !patientAadharCard ||
      !patientPANcard ||
      !policyPANcard ||
      !policyAadharCard ||
      !cancelCheque ||
      !bankStatment ||
      !prescription
    )
      throw new Error("All the documents are required");
    //Uploading image to cloudinary
    const paitentUploadedAadharCard = await cloudinary.uploader.upload(
      patientAadharCard.tempFilePath,
      { folder: "Varlyq" }
    );
    const paitentUploadedPANcard = await cloudinary.uploader.upload(
      patientPANcard.tempFilePath,
      { folder: "Varlyq" }
    );
    const policyUploadedAadharCard = await cloudinary.uploader.upload(
      policyAadharCard.tempFilePath,
      { folder: "Varlyq" }
    );
    const policyUploadedPANcard = await cloudinary.uploader.upload(
      policyPANcard.tempFilePath,
      { folder: "Varlyq" }
    );
    const cancelledChequedUploaded = await cloudinary.uploader.upload(
      cancelCheque.tempFilePath,
      { folder: "Varlyq" }
    );
    const bankStatementUploaded = await cloudinary.uploader.upload(
      bankStatment.tempFilePath,
      { folder: "Varlyq" }
    );
    const prescriptionUploaded = await cloudinary.uploader.upload(
      prescription.tempFilePath,
      { folder: "Varlyq" }
    );

    //Storing the data using redis

    redisClient.set(`${id}:patientAadharNo`, patientAadharNo);
    redisClient.set(
      `${id}:patientAadharCard`,
      paitentUploadedAadharCard.secure_url
    );
    redisClient.set(`${id}:patientPAN`, patientPANnumber);
    redisClient.set(`${id}:patientPANcard`, paitentUploadedPANcard.secure_url);
    redisClient.set(`${id}:policyAadharNo`, policyAadharNo);
    redisClient.set(
      `${id}:policyAadharCard`,
      policyUploadedAadharCard.secure_url
    );
    redisClient.set(`${id}:policyPAN`, policyPANnumber);

    redisClient.set(`${id}:policyPANcard`, policyUploadedPANcard.secure_url);
    redisClient.set(`${id}:cancelCheque`, cancelledChequedUploaded.secure_url);
    redisClient.set(`${id}:bankStatement`, bankStatementUploaded.secure_url);
    redisClient.set(`${id}:prescription`, prescriptionUploaded.secure_url);
    res.status(200).json({
      success: true,
      message: "Data has been set on redisClient",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, error: error.message });
  }
};
