'use strict';
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
    this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.tabulaRecta = [];
  }

  fillTableOfVigenere(abc) {
    for (let i = 0; i < abc.length; i++) {
      this.tabulaRecta.push([...abc.slice(i), ...abc.slice(0, i)]);
    }
  }

  findIndexOfArr(value) {
    let indexOfArr;
    this.tabulaRecta.forEach((elem, index) => {
      if (value === elem[0]) {
          indexOfArr = index;
      }
    });
    return indexOfArr;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }

    let encryptedRes = '';
    let offset = 0;
    const messageToArr = message.toUpperCase().split('');

    if (this.tabulaRecta.length === 0) {
      this.fillTableOfVigenere(this.abc);
    }

    while (message.length > key.length) {
      key += key;
    }

    key = key.toUpperCase();

    for (let i = 0; i < messageToArr.length; i++) {
      if (this.abc.indexOf(messageToArr[i]) === -1) {
        encryptedRes += messageToArr[i];
        offset++;
      } else {
        encryptedRes += this.tabulaRecta[this.findIndexOfArr(key[i - offset])][this.abc.indexOf(messageToArr[i])];
      }
    }

    if (this.reverse === false) {
      encryptedRes = encryptedRes.split('').reverse().join('');
    }

    return encryptedRes;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error();
    }

    let decryptedRes = '';
    let offset = 0;
    const messageToArr = encryptedMessage.toUpperCase().split('');

    if (this.tabulaRecta.length === 0) {
      this.fillTableOfVigenere(this.abc);
    }

    while (encryptedMessage.length > key.length) {
      key += key;
    }

    key = key.toUpperCase();

    for (let i = 0; i < messageToArr.length; i++) {
      if (this.abc.indexOf(messageToArr[i]) === -1) {
        decryptedRes += messageToArr[i];
        offset++;
      } else {
        decryptedRes += this.tabulaRecta[0][this.tabulaRecta[this.findIndexOfArr(key[i - offset])].indexOf(messageToArr[i])];
      }
    }

    if (this.reverse === false) {
      decryptedRes = decryptedRes.split('').reverse().join('');
    }

    return decryptedRes;
  }
}

module.exports = VigenereCipheringMachine;