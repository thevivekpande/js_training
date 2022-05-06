const error = [];

let count = 10000000000;
// Function will return errorId
const addError = (err) => {
  count++;
  error.push({ id: count, msg: err.msg, Time: new Date().getTime() });
  return count;
};

// Exporting module
module.exports = {
  addError: addError,
};
