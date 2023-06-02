const { validateBrackets } = require('../brackets');

describe('Bracket Validation', () => {
  test('should return true for input strings with balanced brackets', () => {
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('{}(){}')).toBe(true);
    expect(validateBrackets('()[[Extra Characters]]')).toBe(true);
    expect(validateBrackets('(){}[[]]')).toBe(true);
    expect(validateBrackets('{}{Code}[Fellows](())')).toBe(true);
  });

  test('should return false for input strings with unbalanced brackets', () => {
    expect(validateBrackets('[({}]')).toBe(false);
    expect(validateBrackets('(](')).toBe(false);
    expect(validateBrackets('{(})')).toBe(false);
  });

  test('should correctly handle input strings with only opening brackets', () => {
    expect(validateBrackets('{')).toBe(false);
    expect(validateBrackets('[')).toBe(false);
    expect(validateBrackets('(')).toBe(false);
  });

  test('should correctly handle input strings with only closing brackets', () => {
    expect(validateBrackets('}')).toBe(false);
    expect(validateBrackets(']')).toBe(false);
    expect(validateBrackets(')')).toBe(false);
  });

  test('should correctly handle input strings without any brackets', () => {
    expect(validateBrackets('')).toBe(true);
    expect(validateBrackets('Hello, world!')).toBe(true);
    expect(validateBrackets('12345')).toBe(true);
  });
});
