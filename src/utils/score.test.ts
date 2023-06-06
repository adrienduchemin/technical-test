import {
  containsPonctuation,
  containsRepetitiveSequence,
  containsPalindrome,
  countJoyfulWords,
} from './score';

describe('containsPonctuation', () => {
  test('should return true if the string contains ponctuation', () => {
    const value = 'Hello!';
    expect(containsPonctuation(value)).toBe(true);
  });

  test('should return false if the string does not contain ponctuation', () => {
    const value = 'Hello';
    expect(containsPonctuation(value)).toBe(false);
  });
});

describe('containsRepetitiveSequence', () => {
  test('should return true if the string contains repetitive sequence', () => {
    const value = 'aaa';
    expect(containsRepetitiveSequence(value)).toBe(true);
  });

  test('should return false if the string does not contain repetitive sequence', () => {
    const value = 'abc';
    expect(containsRepetitiveSequence(value)).toBe(false);
  });
});

describe('containsPalindrome', () => {
  test('should return true if the string contains a palindrome', () => {
    const value = 'kayak and me';
    expect(containsPalindrome(value)).toBe(true);
  });

  test('should return false if the string does not contain a palindrome', () => {
    const value = 'hello';
    expect(containsPalindrome(value)).toBe(false);
  });
});

describe('countJoyfulWords', () => {
  test('should return the correct count of joyful words in the string', () => {
    const value = 'I am so happy and joyful';
    expect(countJoyfulWords(value)).toBe(2);
  });

  test('should return 0 if no joyful words are found in the string', () => {
    const value = 'Hello this is Adrien';
    expect(countJoyfulWords(value)).toBe(0);
  });
});
