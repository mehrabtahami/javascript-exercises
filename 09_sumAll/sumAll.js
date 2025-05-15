const sumAll = function () {
  let num1 = arguments[0];
  let num2 = arguments[1];
  let output = 0;

  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 < num2 && num1 > 0 && num1 % 1 == 0) {
      for (let i = num1; i <= num2; i++) {
        output += i;
      }
    } else if (num1 > num2 && num2 > 0 && num2 % 1 == 0) {
      for (let i = num1; i >= num2; i--) {
        output += i;
      }
    } else {
      output = "ERROR";
    }
  } else {
    output = "ERROR";
  }

  return output;
};

// Do not edit below this line
module.exports = sumAll;
