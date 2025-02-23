const { MongoClient } = require("mongodb");
const colors = require("colors");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { client };