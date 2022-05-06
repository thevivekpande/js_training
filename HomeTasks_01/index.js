const express = require("express");
const data = require("./db/data").books;

const logger = require("./middleware.js").logger;

const router = require("./routeController.js").router;

const addError = require("./errordb.js").addError;

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api", logger, router);
app.use("/*", logger, (req, res) => {
  res.statusCode = 404;
  throw new Error({ message: "Couldn't find the requested resources." });
});

app.use((err, req, res, next) => {
  if (err) {
    const errorId = addError(err);
    res.json({
      msg: `Error Message: ${err.message} Encountered some error, please use error Id for connecting with costomer service ErrorID:${errorId}`,
    });
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
