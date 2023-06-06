// A the input receive a list of completed_quests, I don't really understand why this is needed.
// I made the assumptions that the input comes from a frontend which add to his array of completedQuests
// the quests for which it receives success from this program
// Also if he refreshes his page, he lost the content of previous completedQuests too

// map to store the completedQuestIds for each userId
export const completedQuests: Record<string, string[]> = {};
