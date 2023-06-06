export interface AccessConditionContains {
  type: 'nft';
  value: string;
  operator: 'contains' | 'notContains';
}

export interface AccessConditionComparaison {
  type: 'level' | 'date';
  value: string;
  operator: '<' | '>';
}

export type AccessCondition = AccessConditionContains | AccessConditionComparaison;

export interface Quest {
  questId: string; // uuid
  userId: string; // uuid
  claimed_at: string; // date in ISO 8601 format
  access_condition: AccessCondition[];
  user_data: {
    completed_quests: string[]; // array of uuid
    nfts: string[]; // array of NFTs ID (hexadecimal)
    level: number; // positive integer
  };
  submission_text: string; // string
}

export interface QuestResult {
  status: 'success' | 'fail';
  score: number; // integer between 0 and 10
}

export interface CompletedQuests {
  userId: string;
  questIds: string[];
}
