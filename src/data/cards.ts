import { Card, CardEnum } from "../app/cards/mockData";

type Cards = {
  module_id: number;
  cards: Card[];
};

export const cards: Cards[] = [
  {
    module_id: 1,
    cards: [
      {
        id: 1,
        title:
          "Sendo o time azul (esquerda) qual é a melhor forma de jogar com essa composição no primeiro dragão?",
        description: "Guia para iniciantes",
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
        id: 2,
        title: "Shorts",
        description: "Shorts description",
        type: CardEnum.MULTIPLE_CHOICE,
        answer: "Qual o melhor item do yasuo?",
        options: ["Rei destrúido", "Kraken", "Lifebow", "Gume do infinito"],
        isCorrect: 2,
      },
      {
        id: 3,
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
        id: 4,
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
        id: 5,
        title: "Sobre essa composição responda:",
        description:
          "Faça uma analise sobre essas duas composições e reponda sobre:",
        type: CardEnum.IMAGE,
        imageUrl:
          "https://user-images.githubusercontent.com/46573685/273480091-5d0e07e4-a009-4847-935e-c17671137525.png",
      },
    ],
  },
  {
    module_id: 2,
    cards: [
      {
        id: 4,
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
        id: 5,
        title: "Sobre essa composição responda:",
        description:
          "Faça uma analise sobre essas duas composições e reponda sobre:",
        type: CardEnum.IMAGE,
        imageUrl:
          "https://user-images.githubusercontent.com/46573685/273480091-5d0e07e4-a009-4847-935e-c17671137525.png",
      },

      {
        id: 6,
        title: "Aqui está uma dica!",
        description:
          "Faça uma analise sobre essas duas composições e reponda sobre:",
        type: CardEnum.TEXT,
        text: `<h2>Dica: Comunique-se e mantenha a calma!</h2>
        <p>Uma das chaves para o sucesso no League of Legends é a comunicação e a gestão emocional. Aqui estão alguns pontos importantes a serem lembrados:</p>
        <ol>
            <li><strong>Ping e Chat:</strong> Use os pings para comunicar sua intenção para sua equipe. Pingue o mapa para indicar movimentos, inimigos desaparecidos e objetivos. No chat, mantenha a comunicação clara e construtiva.</li>
            <li><strong>Minimizar a Toxicidade:</strong> Evite ser tóxico em chat. A toxicidade só prejudica a equipe e diminui as chances de vitória. Se alguém estiver sendo tóxico, a melhor resposta é silenciá-los e se concentrar no jogo.</li>
            <li><strong>Gerencie suas Emoções:</strong> League of Legends pode ser um jogo frustrante, mas manter a calma é crucial. Se você se sentir irritado ou chateado, faça uma pausa e retorne quando estiver mais tranquilo.</li>
            <li><strong>Ward e Minimapa:</strong> Use as wards para manter o controle do mapa e evitar emboscadas. Esteja sempre de olho no minimapa para evitar ganks e tomar decisões informadas.</li>
            <li><strong>Objetivos de Equipe:</strong> Foque nos objetivos de equipe, como dragões, barões e torres. Eles são essenciais para a vitória e proporcionam benefícios significativos.</li>
            <li><strong>Aprenda com Cada Partida:</strong> Após cada partida, reflita sobre o que deu certo e o que deu errado. Identifique áreas de melhoria e trabalhe nelas.</li>
        </ol>
        <p>Lembre-se, a prática constante e a aprendizagem são essenciais para melhorar no League of Legends. Boa sorte e divirta-se no Rift!</p>`,
      },
      {
        id: 7,
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
    ],
  },
];
