const palindromes = function () {
  let specialChar = [" ", "/", "@", "!", ".", ",", "#", "$", "%"];
  let inputSplit = arguments[0].toLowerCase().split("");
  let converted = inputSplit.filter((item) => !specialChar.includes(item));

  console.log(`ORG : ${inputSplit}`);
  console.log(`CONVERTED : ${converted} => REVERSED : ${converted.reverse()}`);

  if (converted.join("") === converted.reverse().join("")) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
