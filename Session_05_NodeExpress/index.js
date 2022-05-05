const express = require("express");
// const bodyparser = require("body-parser");
const books = require("./db/data").books;

// const PORT = 3500;
const PORT = process.env.PORT || 3500; //settig default PORT 3500

const app = express();
// app.use(bodyparser());
app.use(express.json());

app.get("/getdata", (req, res) => {
  //   res.send({ message: "SuccessFully retrieved some data" });
  console.log(books);
  res.send({ books });
});

app.post("/savedata", (req, res) => {
  //   res.send({ message: "Successfully saved some data" });
  const data = req.body;
  books.push(data);
  res.send({ books });
  //   console.log(data);
});

app.put("/updatedata/:isbn", (req, res) => {
  //   res.send({ message: "Successfully updated some data" });
  const isbn = req.params.isbn;
  const data = req.body;
  const position = books.findIndex((book) => book.isbn === isbn);
  //   console.log(position);
  if (position !== -1) {
    books[position] = data;
    res.statusCode = 200;
    res.send({ message: "successfully updated the data" });
  } else {
    res.statusCode = 404;
    res.send({ message: "Unable to find the data" });
  }
});

app.delete("/deletedata/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const position = books.findIndex((book) => book.isbn === isbn);
  if (position !== -1) {
    books.splice(position, 1);
    res.statusCode = 201;
    res.send({ message: "Successfully Deleted some data" });
  } else {
    res.statusCode = 404;
    res.send({ message: "Unable to find the data" });
  }
});

app.listen(PORT, () => {
  console.log(
    `The server is running on ${PORT}. To access it visit https://localhost:${PORT}`
  );
});
