export enum CardEnum {
  SHORTS = "SHORTS",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  IMAGES_CHOICE = "IMAGES_CHOICE",
  IMAGE = "IMAGE",
  SELECT = "SELECT",
  TEXT = "TEXT",
}

interface CardBase {
  id: number;
  title: string;
  description: string;
  type: CardEnum;
}

export interface CardShorts extends CardBase {
  type: CardEnum.SHORTS;
  image: string;
  shortsUrl: string;
}

export interface CardMultipleChoice extends CardBase {
  type: CardEnum.MULTIPLE_CHOICE;
  question: string;
  answer: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correct_answer: number;
  imageUrl?: string;
}

export interface CardSelect extends CardBase {
  type: CardEnum.SELECT;
  options: string[];
  answer: string;
  isCorrects: number[];
  imageUrl?: string;
}

export interface CardImagesChoice extends CardBase {
  type: CardEnum.IMAGES_CHOICE;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  isCorrect: number;
  imageUrl?: string;
  question: string;
}

export interface CardSelectChoice extends CardBase {
  type: CardEnum.SELECT;
  correctAnswers: number[];
  answer: string;
  answer2: string;
  answer3: string;
  answer4: string;
  isCorrect: number;
  imageUrl?: string;
  question: string;
}

export interface CardImage extends CardBase {
  type: CardEnum.IMAGE;
  imageUrl: string;
}

export interface CardText extends CardBase {
  type: CardEnum.TEXT;
  text: string;
}

export type Card =
  | CardShorts
  | CardMultipleChoice
  | CardImagesChoice
  | CardImage
  | CardSelect
  | CardText;
