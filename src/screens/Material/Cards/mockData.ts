export enum CardEnum {
  SHORTS = "SHORTS",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  IMAGES_CHOICE = "IMAGES_CHOICE",
  IMAGE = "IMAGE",
  SELECT = "SELECT",
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

export type Card =
  | CardShorts
  | CardMultipleChoice
  | CardImagesChoice
  | CardImage
  | CardSelect;

export const data: Card[] = [
  {
    uuid: "5",
    title:
      "Sendo o time azul (esquerda) qual é a melhor forma de jogar com essa composição no primeiro dragão?",
    description:
      "Faça uma analise sobre essas duas composições e reponda sobre:",
    type: CardEnum.SELECT,
    answer:
      "Sendo o time azul quais são as melhores forma de jogar com essa composição no primeiro dragão?",
    options: [
      "Garantir controle de visão do dragão",
      "Ser o primero a chegar no pitch do dragão",
      "Tentar pegar um pickoff",
      "Ficar na lane farmando",
    ],
    isCorrects: [0, 1],
    imageUrl:
      "https://user-images.githubusercontent.com/46573685/273486810-d2cd165f-cb70-4d76-956d-f91a6d0712ba.png",
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
    isCorrect: 1,
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
  {
    uuid: "4",
    title: "Sobre essa composição responda:",
    description:
      "Faça uma analise sobre essas duas composições e reponda sobre:",
    type: CardEnum.IMAGE,
    imageUrl:
      "https://user-images.githubusercontent.com/46573685/273480091-5d0e07e4-a009-4847-935e-c17671137525.png",
  },

  {
    uuid: "1",
    title: "Shorts",
    description: "Shorts description",
    type: CardEnum.IMAGES_CHOICE,
    answer: "O seu jungler diz: JIXN QUITA!, qual é aparência dele?",
    options: [
      "https://pbs.twimg.com/media/F8SIzMyWIAAy6bf?format=jpg&name=medium",
      "https://pbs.twimg.com/media/F8Q-oiHXYAAzVji?format=png&name=small",
      "https://pbs.twimg.com/media/F8PyK6FaUAEHszO?format=jpg&name=medium",
      "https://pbs.twimg.com/media/F8R4IuOWEAALDvk?format=jpg&name=900x900",
    ],
    isCorrect: 3,
  },
];
