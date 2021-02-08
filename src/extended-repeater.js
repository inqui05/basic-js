'use strict';
const { usingPromise } = require("sinon");
const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let finalStr;
  str = String(str);
  if(options.addition !== undefined) {
    options.addition = String(options.addition);
  }

  if (options.additionRepeatTimes === undefined && options.addition !== undefined) {
    str += options.addition;
  }

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    str += options.addition;
    if (i !== options.additionRepeatTimes - 1) {
      if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
      }
      str += options.additionSeparator;
    }
  }

  finalStr = str;

  for (let i = 1; i < options.repeatTimes; i++) {
    if (options.separator === undefined) {
      options.separator = '+';
    }
    finalStr += options.separator + str;
  }

  return finalStr;
};
  