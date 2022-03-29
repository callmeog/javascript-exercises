const reverseString = function() {
    const greeting = 'hello';
    const word = greeting.split('')
    word.reverse()
    return word.join('');
  }
  reverseString()

// Do not edit below this line
module.exports = reverseString;
