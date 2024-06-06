const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.listen(port, () => console.log(`listening on port: ${port}`));

const queries = require("./queries");

app.get("/", (request, response) => {
  queries.getAll().then((results) => response.send(results));
});

app.get("/difficulties/:type", (request, response) => {
  queries
    .getDifficulties(request.params.type)
    .then((results) => response.send(results))
    .catch((error) => response.send(error));
});

app.get("/questions/:lesson_id", (request, response) => {
queries
  .getQuestions(request.params.lesson_id)
  .then((results) => response.send(results))
  .catch((error) => response.send(error));
});

app.get("/lessons/:rank_id", (request, response) => {
  queries
    .getLessons(request.params.rank_id)
    .then((results) => response.send(results))
    .catch((error) => response.send(error));
  });

app.get("/rank/:type/:difficulty/:level", (request, response) => {
  queries
  .getRankID(request.params.type, request.params.difficulty, request.params.level)
  .then((results) => response.send(results))
  .catch((error) => response.send(error));
})