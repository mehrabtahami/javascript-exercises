const repeatString = function (string, num) {
  let output = string;
  let n = num;

  if (n == 0) {
    output = "";
  } else if (n < 0) {
    output = "ERROR";
  } else {
    for (let i = 1; i < n; i++) {
      output += string;
    }
  }

  return output;
};

// Do not edit below this line
module.exports = repeatString;
