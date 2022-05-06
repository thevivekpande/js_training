let counter = 0;
// Creating middleware for printing logger informations
const logRequest = (req, res, next) => {
  console.log(`${counter} - ${new Date()} - ${req.method} - ${req.url}`);
  counter++;
  next();
};

module.exports = {
  logger: logRequest,
};
