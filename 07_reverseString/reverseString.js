const reverseString = function (str) {
  let input = str.split("");

  let output = "";
  // below line is taking string length and minus 1 from it(for example 5-1 = 4) & then return it
  // then at the end it will return string length 0 (first charachter "i >= 0" for that last character)
  // works from the end of string to start of the starting (negative loop)
  for (let i = input.length - 1; i >= 0; i--) {
    output += input[i];
  }
  return output;
};

// Do not edit below this line
module.exports = reverseString;
