/*
  Convert Age to days
  ex: calAge(65) => 23725 calAge(0) => 0 calAge(20) => 7300
*/

function calcAge(age) {
  return (age>=0 ? age*365 : 'Error: age value must be positive');
}