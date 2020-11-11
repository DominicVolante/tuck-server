const express = require("express");
const xss = require("xss");
const tuckService = require("./tuck-service");

const tuckRouter = express.Router();
const bodyParser = express.json();

const serializeSymptom = (symptom) => ({
  id: symptom.id,
  name: xss(symptom.name),
  severity: symptom.severity,
  description: xss(symptom.description),
});

tuckRouter
  .route("/home")
  .get((req, res, next) => {
    console.log("get request");
    tuckService
      .getAllSymptoms(req.app.get("db"))
      .then((symptoms) => {
        res.json(symptoms.map(serializeSymptom));
      })
      .catch(next);
  })
  .post(bodyParser, (req, res, next) => {
    for (const field of ["name", "severity", "description"]) {
      if (!req.body[field]) {
        console.error(`${field} is required`);
      }
    }

    const { severity, name, description } = req.body;
    const newSymptom = { severity, name, description };

    tuckService
      .insertSymptom(req.app.get("db"), newSymptom)
      .then((symptom) => {
        console.log(`new symptom with id ${symptom.id} was created`);
        res
          .status(201)
          .location(`/home/${symptom.id}`)
          .json(serializeSymptom(symptom));
      })
      .catch(next);
  });

module.exports = tuckRouter;
