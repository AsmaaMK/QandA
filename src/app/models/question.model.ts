import { Answer } from './answer.model';

export type Question = {
  id: number;
  title: string;
  description: string;
  answers: Answer[];
  askedBy: string;
  askedOn: Date;
  votes: number;
  views: number;
  tags: string[];
  hasAcceptedAnswer: boolean;
};
