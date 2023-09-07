const router = require("express").Router();
const { home, signupBasicInfo } = require("../controllers/signup");
router.route("/").get(home);
router.route("/basicInfo").post(signupBasicInfo);
module.exports = router;
