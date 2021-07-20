function double(number) {
  return number * 2;
}

const double2 = function (number) {
  return number * 2;
};

const double3 = (number) => {
  return number * 2;
};

/* if the arrow function contains only a return statement, I can use the implicit return */
const double4 = (number) => number * 2;

/* if the arrow function has only 1 argument, we can remove the parenthesis */
const double5 = number => number * 2;