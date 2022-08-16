function stringLength(str) {
  const length = str.length;
  if (length > 0 && length < 10) {
    return length;
  }
  throw 'String must be between 1 and 10 characters';
}

function reverseString(str) {
  const reverseStr = str.split('').reverse().join('');
  return reverseStr;
}

function capitalize(str) {
  const capitalized = str[0].toUpperCase() + str.slice(1);
  return capitalized;
}

class Calculator {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }
  add() {
    const sum = this.value1 + this.value2;
    return sum;
  }
  subtract() {
    const minus = this.value1 - this.value2; 
    return minus;
  }
  multiply() {
    const product = this.value1 * this.value2
    return product;
  }
  divide() {
    const quotient = this.value1 / this.value2
    return quotient;
  }
}

module.exports = { stringLength, reverseString, capitalize, Calculator };
