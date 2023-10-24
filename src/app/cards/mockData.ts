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
  answer: string;
  shortsUrl: string;
}

export interface CardMultipleChoice extends CardBase {
  type: CardEnum.MULTIPLE_CHOICE;
  options: string[];
  answer: string;
  isCorrect: number;
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
  options: string[];
  answer: string;
  isCorrect: number;
  imageUrl?: string;
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
