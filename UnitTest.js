function stringLength(str) {
  return str.length;
}

function reverseString(str) {
  const reverseStr = str.split('').reverse().join('');
  return reverseStr;
}

module.exports = { stringLength, reverseString, capitalize };
