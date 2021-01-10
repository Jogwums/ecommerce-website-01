const functions = require("firebase-functions");
require("dotenv").config();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.API_KEY_STRIPE);

const app = express();

app.use(cors({
  origin: true,
}));

app.use(express.json());

app.get("/payments/create", (req, res) => {
    try {

    }
    catch (err) {
      res
          .status(500)
          .json({
              statusCode: 500,
              message: err.message,
          });
    }
});


app.get("*", (req, res) => {
  res
      .status(404)
      .send("404, Not Found");
});

exports.api = functions.https.onRequest(app);
