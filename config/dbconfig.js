const mongoose = require("mongoose");
function dbconfig() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("DB Connection succed");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}
module.exports = dbconfig;
