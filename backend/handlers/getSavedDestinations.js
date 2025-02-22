"use strict";
const { MongoClient } = require("mongodb");
const { sendResponse } = require("../utils");

require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// returns a destination by userId
const getSavedDestinations = async (req, res) => {
  const userId = req.params.userId;

  // creates a new client
  const client = new MongoClient(MONGO_URI, options);
  try {
    // connect to the client
    await client.connect();
    // connect to the database
    const db = client.db("cov1dtravel");
    console.log("connected!");
    const result = await db.collection("saved_destinations").findOne({ user_id: userId });
    // on success
    if (result) {
        sendResponse(res, 200, result);
    } else {
      // on failure
      sendResponse(res, 404, [], "user not found");
    }
  } catch (err) {
    console.log(err.stack);
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

module.exports = {
    getSavedDestinations,
};
