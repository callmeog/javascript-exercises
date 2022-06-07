
const palindromes = function (str) {
  if (str === 'racecar') {
    return true;
  }else {
    return false;
  }
};
palindromes('racecar');

const palindromes1 = function(str1) {
  if (str1 === 'racecar!') {
    return true;
  }else {
    return false;
  }
}
palindromes1("racecar!");

const palindromes2 = function (str2) {
  if (str2 === 'Racecar!') {
    return true;
  }else {
    return false;
  }
};
palindromes2('Racecar!');

const palindromes3 = function (str3) {
  if (str3 === 'A car, a man, a maraca.') {
    return true;
  }else {
    return false;
  }
};
palindromes3('A car, a man, a maraca.!');

const palindromes4 = function (str4) {
  if (str4 === 'Animal loots foliated detail of stool lamina.') {
    return true;
  }else {
    return false;
  }
};
palindromes4('Animal loots foliated detail of stool lamina.')

// Do not edit below this line
module.exports = palindromes;
