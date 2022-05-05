const { application } = require("express");
const express = require("express");
const addError = require("./errordb.js").addError;

const router = express.Router();

// /api/get
const answerGetReq = (req, res) => {
  res.json({ msg: "Hello from get" });
};

// /api/post
const answerPostReq = (req, res) => {
  res.json({ msg: "Hello from post" });
};

// /api/put
const answerPutReq = (req, res) => {
  res.json({ msg: "Hello from put" });
};

// /api/delete
const answerDeleteReq = (req, res) => {
  res.json({ msg: "Hello from delete" });
};

// /api/something
const answerAnyReq = (req, res) => {
  //   res.statusCode = 500;
  //   res.json({ nsg: "Error found" });
  // res.json({ msg: `Hello from ${req.originalUrl}` });
  throw Error("Couldn't find the requested resource");
};

// router.use("/api/get", answerGetReq);
// router.use("/api/post", answerPostReq);
// router.use("/get/put", answerPutReq);
// router.use("/get/delete", answerDeleteReq);

router.use("/get", answerGetReq);
router.use("/post", answerPostReq);
router.use("/put", answerPutReq);
router.use("/delete", answerDeleteReq);
router.use("/*", answerAnyReq);

module.exports = {
  router: router,
};
