import { calculateScore } from './quest';

describe('calculateScore', () => {
  it('should calculate the score ', () => {
    expect(calculateScore('Helo.')).toBe(1);
    expect(calculateScore('kayak')).toBe(2);
    expect(calculateScore('abaaba')).toBe(5); // both repetitive and palidrom
    expect(calculateScore('I am joyful')).toBe(1);
    expect(calculateScore('Nothing')).toBe(0);
  });
});
