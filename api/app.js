const connection = require("./db/connDb");
const express = require("express");
const logger = require("morgan");
const app = express();
const cors = require("cors");
const requestCollection = connection.collection("requests");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ status: 200, message: "API de Solicitações - Rethink3D" });
});

app.post("/requests", async (req, res) => {
  try {
    const newRequest = { ...req.body, date: new Date().toISOString() };

    if (!newRequest.phone || !newRequest.request || !newRequest.name) {
      return res.status(400).send({ message: "Dados incompletos." });
    }

    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);

    const requestExists = await requestCollection.findOne({
      phone: newRequest.phone,
      date: { $gte: oneDayAgo.toISOString() },
    });

    if (requestExists) {
      return res.status(409).send({
        message:
          "Uma solicitação já foi realizada a partir deste número de celular nas últimas 24 horas.",
      });
    }

    await requestCollection.insertOne(newRequest);
    res.status(201).send({ message: "Solicitação enviada!" });
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
