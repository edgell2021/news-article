const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

app.get("/", function(req, res) {
  res.sendFile("./dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function(req, res) {
  console.log(mockAPIResponse);
  res.send(mockAPIResponse);
});

var AYLIENTextAPI = require("aylien_textapi");
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
