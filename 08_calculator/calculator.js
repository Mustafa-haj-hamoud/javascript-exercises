const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
	return arr.reduce( (sum, current) => (current+sum), 0 );
};

const multiply = function(arr) {
  return arr.reduce( (result, current) => (result * current));
};

const power = function(base, pwr) {
  if (pow = 0) return 1;
  let result = base;

  for (let i=1; i<pwr; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function(num) {
  if (num === 0) return 1;
  if (num === 1) return 1;
  let result = 1;
  for (let i = 1; i<=num; i++){
    result *= i;
  }
  return result;
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
