// 1. Node-Modules whicha re there in the node software itself.
// 2. NPM - opem source modules/packages
// 3. Hand crafting - created by US.

// const chalk = require("chalk");
// import chalk from "chalk";
// console.log(chalk);

// import printMessage from "./default.js"; // "type":"module"
// const printMessage = require("./default");
// // printMessage("World");

// const CURR_TIME = require("./someOtherFile");
// console.log(CURR_TIME);

const PORT_NUMBER = 4400;
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.write("Hello");
    res.end();
  } else {
    res.write("Hello World");
    res.end();
  }
});

server.listen(PORT_NUMBER);
