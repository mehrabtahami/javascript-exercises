const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
  return arguments[0] - arguments[1];
};

const sum = function() {
    return arguments[0].reduce((acc,item) => {acc += item
    return acc;
    },0);
};

const multiply = function() {
    return arguments[0].reduce((acc,item) => {acc *= item
    return acc;
    },1);
};

const power = function() {
	let number = arguments[0];
    let power = arguments[1];
    let output = 1;
    for (let i = 0 ; i < power ; i++){
       output *= number ;
    }
    return output;
};

const factorial = function() {
  let number = arguments[0];
  let output = 1;
  for (let i = number ; i >= 1 ; i--){
    output *= i ;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
