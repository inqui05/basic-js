'use strict';
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date !== 'object' || date === null) {
    return 'Unable to determine the time of year!';
  }

  try {
    let trueMonth = date.toDateString().split(' ');
    switch (trueMonth[1]) {
        case 'Dec': return 'winter';
        case 'Jan': return 'winter';
        case 'Feb': return 'winter';
        case 'Mar': return 'spring';
        case 'Apr': return 'spring';
        case 'May': return 'spring';
        case 'Jun': return 'summer';
        case 'Jul': return 'summer';
        case 'Aug': return 'summer';
        case 'Sep': return 'autumn';
        case 'Oct': return 'autumn';
        case 'Nov': return 'autumn';
    }
  } catch (err) {
    throw new Error();
  }
};