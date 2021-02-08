'use strict';
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(+sampleActivity) || sampleActivity > 15 || sampleActivity <= 0) {
    return false;
  }

  const rateConstant = Math.LN2 / HALF_LIFE_PERIOD;
  
  return Math.log(MODERN_ACTIVITY / sampleActivity) / rateConstant;
};
