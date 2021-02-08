'use strict';
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  try {
    Array.isArray(arr);
    if (!arr.includes('--double-next') && !arr.includes('--double-prev') &&
       !arr.includes('--discard-next') && !arr.includes('--discard-prev')) {
      return arr;
    }

    const finalArr = arr.slice();

    for (let i = 0; i < finalArr.length; i++) {
      if (finalArr[i] === '--double-next') {
        if (i !== finalArr.length - 1) {
          finalArr[i] = finalArr[i + 1];
        } else {
          delete finalArr[i];
        }
      } else if (finalArr[i] === '--double-prev') {
        if (i !== 0) {
          finalArr[i] = finalArr[i - 1];
        } else {
          delete finalArr[i];
        }
      }else if (finalArr[i] === '--discard-next') {
        if (i !== finalArr.length - 1) {
          delete finalArr[i];
          delete finalArr[i + 1];
        } else {
          delete finalArr[i];
        }
        i--;
      } else if (finalArr[i] === '--discard-prev') {
        if (i !== 0) {
          delete finalArr[i - 1];
          delete finalArr[i];
        } else {
          delete finalArr[i];
        }
        i--;
      }
    }
    
    for (let i = 0; i < finalArr.length;) {
      if (finalArr[i] === undefined) {
        finalArr.splice(i, 1);
      } else {
          i++;
      }
    }

    return finalArr;
  } catch (err) {
    throw new Error(); 
  }
};
