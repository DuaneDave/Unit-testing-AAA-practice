function stringLength(str) {
  return str.length;
}

function reverseString(str) {
  const reverseStr = str.split('').reverse().join('');
  return reverseStr;
}

function capitalize(str) {
  const capitalized = str[0].toUpperCase() + str.slice(1);
  return capitalized;
}

module.exports = { stringLength, reverseString, capitalize };
