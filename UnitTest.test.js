const { stringLength, reverseString, capitalize, Calculator } = require('./UnitTest.js');

describe('All test are for practice sake', () => {
  test('gives the full length of a string passed in', () => {
    // Arrange
    const str = 'hello';
    // Act
    const result = stringLength(str);
    // Assert
    expect(result).toBe(5);
  });

  test('reverse a string', () => {
    // Arrange
    const str = 'hello';
    // Act
    const result = reverseString(str);
    // Assert
    expect(result).toBe('olleh');
  });
});

describe('Perform basic math expression on two numbers', () => {
  test('add two numbers', () => {
    // Arrange
    const value1 = 1;
    const value2 = 2;
    // Act
    const calculate = new Calculator(value1, value2);
    const result = calculate.add();
    // Assert
    expect(result).toBe(3);
  });

  test('subtract two numbers', () => {
    // Arrange
    const value1 = 4;
    const value2 = 2;
    // Act
    const calculate = new Calculator(value1, value2);
    const result = calculate.subtract();
    // Assert
    expect(result).toBe(2);
  });

  test('subtract two numbers', () => {
    // Arrange
    const value1 = 4;
    const value2 = 2;
    // Act
    const calculate = new Calculator(value1, value2);
    const result = calculate.multiply();
    // Assert
    expect(result).toBe(8);
  });

  test('subtract two numbers', () => {
    // Arrange
    const value1 = 4;
    const value2 = 2;
    // Act
    const calculate = new Calculator(value1, value2);
    const result = calculate.divide();
    // Assert
    expect(result).toBe(2);
  });
});

describe('Assert if string is capitalized', () => {
  test('Parameter must be a string', () => {
    const str = 'hello';
    const type = typeof str;
    expect(type).toBe('string');
  });

  test('Is Parameter capitalized', () => {
    const str = 'hello';
    const result = capitalize(str);
    expect(result).toBe('Hello');
  });
});
