const router = require("express").Router();
const { home, signupBasicInfo } = require("../controllers/basicInfo");
const { documentUpload } = require("../controllers/documentUpload");
const { bankDetails } = require("../controllers/bankDetails");
const { otherDetails } = require("../controllers/savingToDB");
router.route("/").get(home);
router.route("/basicInfo").post(signupBasicInfo);
router.route("/documentUpload").post(documentUpload);
router.route("/bankDetails").post(bankDetails);
router.route("/otherDetails").post(otherDetails);
module.exports = router;
