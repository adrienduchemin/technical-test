import {
  checkAccessConditionDate,
  checkAccessConditionLevel,
  checkAccessConditionNFT,
  checkQuestCompleted,
  executeOperator,
} from './checkers';

describe('executeOperator', () => {
  test('executeOperator with > operator', () => {
    const result = executeOperator('>', 4, 3);

    expect(result).toBe(true);
  });

  test('executeOperator with < operator', () => {
    const result = executeOperator('<', new Date(new Date().getTime() - 1), new Date());

    expect(result).toBe(true);
  });
});

describe('checkAccessConditionLevel', () => {
  test('checkAccessConditionLevel return true', () => {
    const result = checkAccessConditionLevel({
      access_condition: [{ type: 'level', operator: '>', value: '3' }],
      user_data: { level: 5, completed_quests: [], nfts: [] },
    });

    expect(result).toBe(true);
  });
});

describe('checkAccessConditionDate', () => {
  test('checkAccessConditionDate return true', () => {
    const result = checkAccessConditionDate({
      access_condition: [{ type: 'date', operator: '<', value: '2023-03-15T10:44:22+0000' }],
      claimed_at: '2022-03-15T10:44:22+0000',
    });

    expect(result).toBe(true);
  });
});

describe('checkAccessConditionNFT', () => {
  test('checkAccessConditionNFT', () => {
    const result = checkAccessConditionNFT({
      access_condition: [{ type: 'nft', operator: 'contains', value: '1' }],
      user_data: { level: 5, completed_quests: [], nfts: ['1'] },
    });

    expect(result).toBe(true);
  });
});

describe('checkQuestCompleted', () => {
  test('checkQuestCompleted already in completed', () => {
    const result = checkQuestCompleted({
      user_data: { level: 5, completed_quests: ['1'], nfts: ['1'] },
      questId: '1',
      userId: '1',
    });

    expect(result).toBe(true);
  });
});
