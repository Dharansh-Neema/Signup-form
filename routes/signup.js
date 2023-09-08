const router = require("express").Router();
const { home, signupBasicInfo } = require("../controllers/signup");
const { documentUpload } = require("../controllers/documentUpload");
router.route("/").get(home);
router.route("/basicInfo").post(signupBasicInfo);
router.route("/documentUpload").post(documentUpload);
module.exports = router;
