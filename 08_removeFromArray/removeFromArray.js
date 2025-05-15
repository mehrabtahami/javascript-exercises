const removeFromArray = function (arr, ...nums) {
  const newArr = [];
  arr.forEach((item) => {
    if (!nums.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
