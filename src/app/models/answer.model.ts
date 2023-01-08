export type Answer = {
  id: number;
  questionId: number;
  description: string;
  answeredBy: string;
  answeredOn: Date;
  votes: number;
  accepted: boolean;
};
