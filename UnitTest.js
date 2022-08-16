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

module.exports = { stringLength, reverseString, capitalize };
