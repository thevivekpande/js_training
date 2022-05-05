function printMessage(msg) {
  console.log(`${new Date()} : Hello ${msg}`);
}

// export default printMessage; //"type":"module"
module.exports = printMessage; // "type":"commonjs"
