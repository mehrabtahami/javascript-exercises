const leapYears = function () {
  const year = arguments[0];
  let output;
  let four = year % 4;
  let oneHun = year % 100;
  let fourHun = year & 400;
  if (four === 0) {
    if (oneHun === 0) {
      if (fourHun === 0) {
        output = true;
      } else {
        output = false;
      }
    } else {
      output = true;
    }
  } else {
    output = false;
  }
  return output;
};

// Do not edit below this line
module.exports = leapYears;
