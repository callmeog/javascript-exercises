const leapYears = function(verifyLeapYear) {
    if(verifyLeapYear / 4 && verifyLeapYear / 400) {
      return true;
    }else if(verifyLeapYear / 100) {
      return false;
    }
  }
  leapYears(1996)

// Do not edit below this line
module.exports = leapYears;
