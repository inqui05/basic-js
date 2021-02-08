'use strict';
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let nameOfTeam = [];

  members.forEach(element => {
    if (typeof element === 'string') {
      nameOfTeam.push(element.trim().slice(0, 1).toUpperCase());
    }
  });

  return (nameOfTeam.length !== 0 ? nameOfTeam.sort().join('') : false);
};
