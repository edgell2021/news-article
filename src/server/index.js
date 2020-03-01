const dotenv = require("dotenv");
dotenv.config();

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

console.log(__dirname);

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

let data = {};

const aylien = require("aylien_textapi");
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.post("/sentiment", function(req, res) {
  // console.log(req);
  let urlSearched = req.body.url;

  textapi.sentiment({ url: urlSearched }, function(
    error,
    response,
    rateLimits
  ) {
    console.log(rateLimits);
    console.log(response);
    console.log(data);
    if (error === null) {
      data = response;
      res.send(data);
      console.log(data);
    } else {
      console.log(error);
    }
  });
});
