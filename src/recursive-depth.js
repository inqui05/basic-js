'use strict';
const CustomError = require("../extensions/custom-error");


module.exports = class DepthCalculator {
  constructor () {
  }

  calculateDepth(arr, currentPos = 1) {
    if (arr.length === 0) {
      return currentPos;
    } else {
      for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
          const temperaryPos = this.calculateDepth(arr[i]);

          if (temperaryPos >= currentPos) {
            currentPos = 1 + temperaryPos;
          }
        }
      }
      return currentPos;
    }
  }
};