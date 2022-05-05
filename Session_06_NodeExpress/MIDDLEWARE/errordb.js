const errors = [];

let counter = 1000000;
const addError = (err) => {
  counter++;
  errors.push({ id: counter, msg: err.message, time: new Date().getTime() });
  return counter;
};

module.exports = {
  addError: addError,
};
