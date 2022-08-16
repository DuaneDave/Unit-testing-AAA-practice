const { stringLength, reverseString, capitalize } = require('./UnitTest.js');

describe('All test are for practice sake', () => {
  test('gives the full length of a string passed in', () => {
    // Arrange
    const str = 'hello';
    // Act
    const result = stringLength(str);
    // Assert
    expect(result).toBe(5);
  });
});

