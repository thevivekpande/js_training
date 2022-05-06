const error = [];

let count = 10000000000;
const addError = (err) => {
  count++;
  error.push({ id: count, msg: err.msg, Time: new Date().getTime() });
  return count;
};

module.exports = {
  addError: addError,
};
