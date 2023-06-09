import { joyfulWords, ponctuations, repetitiveSequence } from '../constants';

export function containsPonctuation(value: string): boolean {
  return ponctuations.test(value);
}

export function containsRepetitiveSequence(value: string) {
  return repetitiveSequence.test(value);
}

export function containsPalindrome(value: string) {
  for (const word of value.split(' ')) {
    // maybe if length > 2 because "aa" would be considered a palindrome too, I don't know if it should be
    if (word.length > 1 && word === word.split('').reverse().join('')) {
      return true;
    }
  }

  return false;
}

export function countJoyfulWords(value: string): number {
  const cleanValue = `${value.toLowerCase()}`;

  return joyfulWords.reduce<number>((acc, joyfulWord) => {
    return cleanValue.includes(joyfulWord) ? acc + 1 : acc;
  }, 0);
}
