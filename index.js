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
    console.log("type: " + request.params.type)
  queries
    .getDifficulties(request.params.type)
    .then((results) => response.send(results))
    .catch((error) => response.send(error));
});
