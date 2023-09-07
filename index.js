const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

//configuring .env file
require("dotenv").config();
//configuring database
const dbconfig = require("./config/dbconfig");
dbconfig();
//Regular middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
const routes = require("./routes/signup");
app.use("/", routes);
//server setup
app.listen(PORT, () => {
  console.log(`The Server is running on PORT:${PORT}`);
});
