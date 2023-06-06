import express, { Response } from 'express';
import { completeQuest } from './services/quest';
import { Quest, QuestResult } from './types/quest';
import { TypedRequest } from './types/request';

export function createServer() {
  // Create Express app
  const app = express();

  // Middleware
  app.use(express.json());

  // Routes
  app.post('/quest', (req: TypedRequest<Quest>, res: Response<QuestResult>) => {
    const result = completeQuest(req.body);

    res.status(200).json(result);
  });

  return app;
}
