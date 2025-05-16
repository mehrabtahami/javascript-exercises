const findTheOldest = function () {
  const input = arguments[0];
  let currentYear = 2025;
  const ages = input.sort((a, b) => {
    if (a.yearOfDeath === undefined) {
      a.yearOfDeath = currentYear;
    }
    if (b.yearOfDeath === undefined) {
      b.yearOfDeath = currentYear;
    }
    if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
      return -1;
    } else {
      return 1;
    }
  });
  return ages[0];
};

// Do not edit below this line
module.exports = findTheOldest;
