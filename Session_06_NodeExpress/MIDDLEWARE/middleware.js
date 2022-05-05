let counter = 0;
const logRequest = (req, res, next) => {
  console.log(`${counter} - ${new Date()} - ${req.method} - ${req.url}`);
  counter++;
  next();
};

module.exports = {
  Logger: logRequest,
};
