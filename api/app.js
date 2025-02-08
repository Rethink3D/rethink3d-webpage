const connection = require("./db/connDb");
const express = require("express");
const logger = require("morgan");
const app = express();
const cors = require("cors");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const requestCollection = connection.collection("requests");

app.get("/", (req, res) => {
  res.send({ status: 200, message: "API de Solicitações - Rethink3D" });
});

app.post("/requests", async (req, res) => {
  try {
    const newRequest = { ...req.body, date: new Date().toISOString() };

    console.log(req.body);

    if (!newRequest.phone || !newRequest.request)
      throw new Error("Dados incompletos.");

    await requestCollection.insertOne(newRequest);
    res.send({ status: 201, message: "Solicitação enviada!" });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

app.get("/requests", async (req, res) => {
  try {
    const requests = await requestCollection.find().toArray();
    res.send(requests);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

app.delete("/requests", async (req, res) => {
  res.status(500).send({ message: "Não implementado ainda." });
});

module.exports = app;
