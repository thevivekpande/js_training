let counter = 0;
const logRequest1 = (req, res, next) => {
  console.log(`${counter} - ${new Date()}`);
  counter++;
  next();
};

let counter2 = 0;
const logRequest2 = (req, res, next) => {
  console.log(`${counter2} - ${req.method}`);
  counter2++;
  next();
};

let counter3 = 0;
const logRequest3 = (req, res, next) => {
  console.log(`${counter3} - ${req.url}`);
  counter3++;
  next();
};
module.exports = {
  Logger1: logRequest1,
  Logger2: logRequest2,
  Logger3: logRequest3,
};
