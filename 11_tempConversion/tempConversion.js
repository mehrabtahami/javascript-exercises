const convertToCelsius = function () {
  let fTc = arguments[0];
  let result = ((fTc - 32) * 5) / 9;
  let output = Math.round(result * 10) / 10;
  return output;
};

const convertToFahrenheit = function () {
  let cTf = arguments[0];
  let result = (cTf * 9) / 5 + 32;
  let output = Math.round(result * 10) / 10;
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
