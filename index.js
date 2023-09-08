const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

//setting up express-fileupload
const fileupload = require("express-fileupload");
app.use(fileupload({ useTempFiles: true, tempFileDir: "/tmp/" }));

//configuring .env file
require("dotenv").config();
//configuring database
const dbconfig = require("./config/dbconfig");
dbconfig();
//Regular middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());
//Routes
const routes = require("./routes/application");
app.use("/", routes);
//server setup
app.listen(PORT, () => {
  console.log(`The Server is running on PORT:${PORT}`);
});
