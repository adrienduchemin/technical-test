import { MAX_JOYFUL_WORDS } from '../constants';
import { completedQuests } from '../repositories/quest';
import { Quest, QuestResult } from '../types/quest';
import { checkAccessConditions, checkQuestCompleted, checkScore } from '../utils/checkers';
import {
  containsPalindrome,
  containsPonctuation,
  containsRepetitiveSequence,
  countJoyfulWords,
} from '../utils/score';

export function completeQuest(quest: Quest): QuestResult {
  // we also could validate the body first with ajv or something and return 400 if not valid

  const score = calculateScore(quest.submission_text);
  const status = calculateStatus(quest, score);

  // that was not asked but it makes sense with my assumptions
  if (status === 'success') {
    completedQuests[quest.questId] = [...(completedQuests[quest.userId] ?? []), quest.questId];
  }

  return { score, status };
}

export function calculateScore(text: Quest['submission_text']): number {
  let score = 0;

  // I assume that if there are more than one present, we still add 1 point (contains at least)
  if (containsPonctuation(text)) {
    score += 1;
  }

  if (containsPalindrome(text)) {
    score += 2;
  }

  // I assume that if there are more than one present, we still add 3 point (contains at least)
  if (containsRepetitiveSequence(text)) {
    score += 3;
  }

  const numberOfJoyfulWords = countJoyfulWords(text);
  score += numberOfJoyfulWords < MAX_JOYFUL_WORDS ? numberOfJoyfulWords : MAX_JOYFUL_WORDS;

  return score;
}

export function calculateStatus(quest: Quest, score: number): 'success' | 'fail' {
  const conditionsValid = checkAccessConditions(quest);
  const questValid = !checkQuestCompleted(quest);
  const scoreValid = checkScore(score);

  return conditionsValid && questValid && scoreValid ? 'success' : 'fail';
}
