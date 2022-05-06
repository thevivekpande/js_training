const express = require("express");
const router = express.Router();
const books = require("./db/data").books;

// api/get
const answerGetReq = (req, res) => {
  res.send(books);
};

// api/post
const answerPostReq = (req, res) => {
  const data = req.body;
  books.push(data);
  res.send(books);
};

// api/put
const answerPutReq = (req, res) => {
  const isbn = req.params.isbn;
  const data = req.body;
  const position = books.findIndex((book) => book.isbn === isbn);
  if (position !== -1) {
    books[position] = data;
    res.statusCode = 200;
    res.send({ msg: "Successfully updated the data" });
  } else {
    res.statusCode = 404;
    throw new Error("Couldn't find the requested data");
  }
};

// api/delete
const answerDeleteReq = (req, res) => {
  const isbn = req.params.isbn;
  const data = req.body;
  const position = books.findIndex((book) => book.isbn == isbn);

  if (position !== -1) {
    books.splice(position);
    res.statusCode = 200;
    res.send({ msg: "Successfullly deleted the data." });
  } else {
    res.statusCode = 404;
    throw new Error("Couldn't find the requested data");
  }
};

// api/something
const answerAnyReq = (req, res) => {
  throw new Error("Couldn't find the requested resources");
};

router.get("/get", answerGetReq);
router.post("/post", answerPostReq);
router.put("/put/:isbn", answerPutReq);
router.delete("/delete/:isbn", answerDeleteReq);
router.use("/*", answerAnyReq);

module.exports = {
  router: router,
};
