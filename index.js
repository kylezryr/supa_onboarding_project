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

app.get("/lesson/:lesson_id", (request, response) => {
  queries
    .getLesson(request.params.lesson_id)
    .then((results) => response.send(results))
    .catch((error) => response.send(error));
});

app.get("/lessons/:rank_id", (request, response) => {
  queries
    .getLessons(request.params.rank_id)
    .then((results) => response.send(results))
    .catch((error) => response.send(error));
});

app.get("/lessonID/:type/:difficulty/:level/:lesson_number", (req, res) => {
  queries
    .getLessonID(
      req.params.type,
      req.params.difficulty,
      req.params.level,
      req.params.lesson_number,
    )
    .then((results) => res.send(results))
    .catch((error) => res.send(error));
});

app.get("/rankID/:type/:difficulty/:level", (request, response) => {
  queries
    .getRankID(
      request.params.type,
      request.params.difficulty,
      request.params.level,
    )
    .then((results) => response.send(results))
    .catch((error) => response.send(error));
});

app.get("/scores/:rank_id", (request, response) => {
  queries
    .getScores(request.params.rank_id)
    .then((results) => response.send(results))
    .catch((error) => response.send(error));
});

app.get("/ranks", (request, response) => {
  queries
    .getAllRanks()
    .then((results) => response.send(results))
    .catch((error) => response.send(error));
});

app.get("/maxRanks", (request, response) => {
  queries
    .getMaxRanks()
    .then((results) => response.send(results))
    .catch((error) => response.send(error));
});

app.get("/typeScores", (request, response) => {
  queries
    .getTypeTotalScores()
    .then((results) => response.send(results))
    .catch((error) => response.send(error));
});

app.post("/updateLessonScore/:lesson_id/:score/:rank_id", (request, response) => {
  queries
    .updateLessonScore(request.params.lesson_id, request.params.score, request.params.rank_id)
    .then((results) => response.send(results))
    .catch((error) => response.send(error));
});
