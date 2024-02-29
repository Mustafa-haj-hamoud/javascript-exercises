const convertToCelsius = function(fahrenheit) {
  //conversion formula
  let celcius = 5*(fahrenheit-32) / 9;

  //round to one decimal place
  celcius = Math.round(10 * celcius) / 10;
  return celcius
};

const convertToFahrenheit = function(celcius) {
  //conversion formula
  let fahrenheit = (celcius * 9 / 5) + 32;

  //round to one decimal place
  fahrenheit = Math.round(10 * fahrenheit) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
