export enum CardEnum {
  SHORTS = "SHORTS",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  IMAGES_CHOICE = "IMAGES_CHOICE",
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

export interface CardMultipleChoice extends CardBase {
  type: CardEnum.MULTIPLE_CHOICE;
  options: string[];
  answer: string;
  isCorrect: number;
  imageUrl?: string;
}

export interface CardImagesChoice extends CardBase {
  type: CardEnum.IMAGES_CHOICE;
  options: string[];
  answer: string;
  isCorrect: number;
  imageUrl?: string;
}

export type Card = CardShorts | CardMultipleChoice | CardImagesChoice;

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
    answer: "Qual o melhor item do yasuo?",
    options: ["Rei destrúido", "Kraken", "Lifebow", "Gume do infinito"],
    isCorrect: 2,
  },
  {
    uuid: "3",
    title: "Shorts",
    description: "Shorts description",
    type: CardEnum.MULTIPLE_CHOICE,
    answer: "Essa build do yasuo está correta?",
    options: ["Sim", "Não"],
    isCorrect: 2,
    imageUrl:
      "https://user-images.githubusercontent.com/46573685/273407835-984ffb6c-d503-4906-8d3e-52ae81e7e948.png",
  },
  {
    uuid: "3",
    title: "Shorts",
    description: "Shorts description",
    type: CardEnum.IMAGES_CHOICE,
    answer: "Qual melhor item para yasuo?",
    options: [
      "https://static.wikia.nocookie.net/leagueoflegends/images/3/37/Rabadon%27s_Deathcap_item_old2.png/revision/latest/smart/width/250/height/250?cb=20201125210622",
      "https://static.wikia.nocookie.net/leagueoflegends/images/5/59/Recurve_Bow_item_old2.png/revision/latest/smart/width/250/height/250?cb=20221019172217",
      "https://static.wikia.nocookie.net/leagueoflegends/images/c/ce/Infinity_Edge_item_old4.png/revision/latest/smart/width/250/height/250?cb=20221117012624",
      "https://pbs.twimg.com/media/F0FjbNCWAAAV9ET.jpg",
    ],
    isCorrect: 2,
    imageUrl:
      "https://user-images.githubusercontent.com/46573685/273407835-984ffb6c-d503-4906-8d3e-52ae81e7e948.png",
  },
];
