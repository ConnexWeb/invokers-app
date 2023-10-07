export enum CardEnum {
  SHORTS = "SHORTS",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
}

interface CardBase {
  uuid: string;
  title: string;
  description: string;
  type: CardEnum;
}

export interface CardShorts extends CardBase {
  type: CardEnum.SHORTS;
  answer: string;
  shortsUrl: string;
}

interface CardMultipleChoice extends CardBase {
  type: CardEnum.MULTIPLE_CHOICE;
  options: string[];
  answer: string;
}

export type Card = CardShorts | CardMultipleChoice;

export const data: Card[] = [
  {
    uuid: "1",
    title: "Shorts",
    description: "Shorts description",
    type: CardEnum.SHORTS,
    answer: "Shorts answer",
    shortsUrl: "2zNRjLSeYy4?si=GO8zEq7K4Pf8Tcav",
  },
  {
    uuid: "2",
    title: "Shorts",
    description: "Shorts description",
    type: CardEnum.MULTIPLE_CHOICE,
    answer: "Shorts answer",
    options: ["Option 1", "Option 2", "Option 3"],
  },
];
