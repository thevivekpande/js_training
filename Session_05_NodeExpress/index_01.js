const http = require("http");
const books = require("./db/data").books;
const server = http.createServer((req, res) => {
  if (req.url === "/get") {
    const dat = JSON.stringify(books);
    res.setHeader("Content-type", "application/json");
    res.write(dat, (err) => {
      if (err) {
        console.error(err.message);
      }
    });
    res.end();
  } else if (req.url === "/save") {
    // save te data into a data store
    // req.on("data", (data) => {
    //   console.log(data.toString("utf-8"));
    // });

    // req.on("readable", () => {
    //   console.log("Request is now readable");
    // });

    req.on("data", (data) => {
      const book = data.toString("utf-8");
      const bookAsJson = JSON.parse(book);
      books.push(bookAsJson);
      console.log(books);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 201;
      res.write(JSON.stringify(books));
      res.end();
    });
  } else {
    res.write("Hello world");
    res.end();
  }
});

server.listen(8000, () => {
  console.log(
    `The server is running on Port 8000. To access it, visit http://localhost:8000`
  );
});
