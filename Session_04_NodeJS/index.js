const express = require("express");
const bodyParser = require("body-parser");
const movies = require("./data").movies;
const app = express();

app.use(bodyParser());

const PORT = 4500;

app.get("/", (req, res) => {
  res.json(movies);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  let d = {};
  for (let index = 0; index < movies.length; index++) {
    const element = movies[index];
    if (element.id == id) {
      d = element;
      break;
    }
  }
  res.json(d);
});

app.post("/", (req, res) => {
  const data = req.body;
  // console.log(data);
  movies.push(data);
  res.json(movies);
});

app.listen(4500, (req, res) => {
  console.log(`server is running on PORT ${PORT}`);
});
