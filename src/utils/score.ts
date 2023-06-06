import { joyfulWords, ponctuations, repetitiveSequence } from '../constants';

export function containsPonctuation(value: string): boolean {
  return ponctuations.test(value);
}

export function containsRepetitiveSequence(value: string) {
  return repetitiveSequence.test(value);
}

export function containsPalindrome(value: string) {
  for (const word of value.split(' ')) {
    if (word.length > 1 && word === word.split('').reverse().join('')) {
      return true;
    }
  }

  return false;
}

export function countJoyfulWords(value: string): number {
  const cleanValue = `${value.toLowerCase()}`;

  return joyfulWords.reduce<number>((acc, joyfulWord) => {
    return cleanValue.includes(`${joyfulWord.toLowerCase()}`) ? acc + 1 : acc;
  }, 0);
}
