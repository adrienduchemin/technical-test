import { completedQuests } from '../repositories/quest';
import { AccessConditionComparaison, AccessConditionContains, Quest } from '../types/quest';

export function checkScore(score: number): boolean {
  return score >= 5;
}

export function checkQuestCompleted(
  quest: Pick<Quest, 'user_data' | 'questId' | 'userId'>,
): boolean {
  // check if the user is redoing the same quest he just did during his frontend session
  const questAlreadyCompleted = quest.user_data.completed_quests.includes(quest.questId);

  if (questAlreadyCompleted) {
    return true;
  }

  // check if the user is redoing a quest he did in a past frontend session
  // as it should be stored in DB, we do it after sync validation so we don't call DB if not needed
  return completedQuests[quest.userId]?.includes(quest.questId) ?? false;
}

export function checkAccessConditions(quest: Quest): boolean {
  return (
    checkAccessConditionNFT(quest) &&
    checkAccessConditionDate(quest) &&
    checkAccessConditionLevel(quest)
  );
}

export function checkAccessConditionNFT(
  quest: Pick<Quest, 'access_condition' | 'user_data'>,
): boolean {
  const accessConditionNFT = quest.access_condition.find(
    accessCondition => accessCondition.type === 'nft',
  );

  if (!accessConditionNFT) {
    return true;
  }

  // i have refactored this into it's own function
  return contains(
    (accessConditionNFT as AccessConditionContains).operator,
    quest.user_data.nfts,
    accessConditionNFT.value,
  );
}

export function checkAccessConditionDate(
  quest: Pick<Quest, 'access_condition' | 'claimed_at'>,
): boolean {
  const accessConditionNFT = quest.access_condition.find(
    accessCondition => accessCondition.type === 'date',
  );

  if (!accessConditionNFT) {
    return true;
  }

  return executeOperator(
    (accessConditionNFT as AccessConditionComparaison).operator,
    new Date(quest.claimed_at),
    new Date(accessConditionNFT.value),
  );
}

export function checkAccessConditionLevel(
  quest: Pick<Quest, 'access_condition' | 'user_data'>,
): boolean {
  const accessConditionNFT = quest.access_condition.find(
    accessCondition => accessCondition.type === 'level',
  );

  if (!accessConditionNFT) {
    return true;
  }

  return executeOperator(
    (accessConditionNFT as AccessConditionComparaison).operator,
    quest.user_data.level,
    Number(accessConditionNFT.value),
  );
}

export function executeOperator<T extends Date | number>(
  operator: AccessConditionComparaison['operator'],
  leftOperand: T,
  rigtOperand: T,
): boolean {
  // if tomorrow we add more operators, we can easily handle them here, so ternaire is ok for now
  return operator === '>' ? leftOperand > rigtOperand : leftOperand < rigtOperand;
}

// should also be unit tested
export function contains(
  operator: AccessConditionContains['operator'],
  array: string[],
  value: string,
): boolean {
  const found = array.includes(value);

  return operator === 'contains' ? found : !found;
}
