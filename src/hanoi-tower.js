'use strict';
const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2**disksNumber - 1;
  const secondPerHour = 60 * 60;
  const countSeconds = Math.floor( secondPerHour / turnsSpeed * turns);

  return {turns: turns,
          seconds: countSeconds};
};