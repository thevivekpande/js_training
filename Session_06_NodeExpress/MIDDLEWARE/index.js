const express = require("express");
const logger = require("./middleware.js").Logger;
const router = require("./routeController.js").router;

const addError = require("./errordb.js").addError;

const logger1 = require("./middleware_01.js").Logger1;
const logger2 = require("./middleware_01.js").Logger2;
const logger3 = require("./middleware_01.js").Logger3;

const app = express();

if (process.env.ENVIRONMENT === "DEV") {
  //Something meaningful happens here!
  console.log("I am in Dev Environment");
}

const PORT_NUMBER = process.env.PORT || 4000;

// app.use(router);
app.use("/api", logger, router);
app.use("/*", (req, res) => {
  res.statusCode = 404;
  res.json({ msg: "Coundn't find the request resource" });
});

// app.get(
//   "/get",
//   (req, res, next) => {
//     console.log("Inside Middleware - 1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Inside Middleware - 2");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Inside Middleware - 3");
//     next();
//   },
//   (req, res) => {
//     res.send({ msg: "Hello, World" });
//   }
// );

// app.get("/get", logger1, logger2, logger3, (req, res) => {
//   res.send({ msg: "Hello, World" });
// });
// app.post("/post", logger1, logger2, logger3, (req, res) => {
//   res.send({ msg: "Hello, World" });
// });
// app.put("/put", logger1, logger2, logger3, (req, res) => {
//   res.send({ msg: "Hello, World" });
// });
// app.delete("/delete", logger1, logger2, logger3, (req, res) => {
//   res.send({ msg: "Hello, World" });
// });

app.use((err, req, res, next) => {
  if (err) {
    // write to log database
    // ErrorId
    // Send Error id
    const errorId = addError(err);

    res.json({
      msg: `Encountered the error. please use errorId for connecting to customer service , ErrorId : ${errorId}`,
    });
    res.json({ msg: "Some error has occured" });
  }
  next();
});

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running at port ${PORT_NUMBER}`);
});
