'use strict';
const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  changeArrToString() {
    for(let i = 0; i < this.chain.length; i++) {
      this.chain[i] = `( ${this.chain[i]} )`;
    }
  },
  getLength() {
    this.changeArrToString();

    return this.chain.join('~~').length;
  },
  addLink(value) {
    if (value === undefined){
      this.chain.push('');
    } else{
      this.chain.push(value);
    }
    return this;
  },
  removeLink(position) {
    if (!isNaN(position) && position <= this.chain.length + 1 && position >= 0) {
      this.chain.splice(position - 1 ,1);
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.changeArrToString();
    const finalString = this.chain.join('~~');
    this.chain = [];

    return finalString;
  }
};

module.exports = chainMaker;
