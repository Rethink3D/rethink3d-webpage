// MongoDB

const { MongoClient } = require("mongodb");
const uri = process.env.CONNECTION_STRING;
const client = new MongoClient(uri);
const db = client.db("rethink3d");

async function connect() {
  await client.connect();
}

connect();

module.exports = db;
