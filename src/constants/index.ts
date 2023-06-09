export const ponctuations = /[,.?!]/;

// this match 2 repetitive characters
// use /(.)\1{2,}/ if you want at least 3
export const repetitiveSequence = /(.)\1+/;

export const MAX_JOYFUL_WORDS = 3;

export const joyfulWords = [
  'joyful',
  'happy',
  'Vibrant',
  'thrilled',
  'euphoric',
  'cheerful',
  'delighted',
] as const;
