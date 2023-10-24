import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";

import { ProgressBar } from "../../components/ProgressBar";
import { cards } from "../../data/cards";
import ShortsVideo from "./ShortsVideo";
import MultipleAnswers from "./MultipleAnswer";
import ImageAnswers from "./ImageAnswers";
import { Image } from "./Image";
import { CardSelect } from "./CardSelect";
import { Text as TextComponent } from "./Text";
import { useLocalSearchParams } from "expo-router";

import * as S from "./styles";
import { Link } from "expo-router";

const CardComponent = {
  SHORTS: ShortsVideo,
  MULTIPLE_CHOICE: MultipleAnswers,
  IMAGES_CHOICE: ImageAnswers,
  IMAGE: Image,
  SELECT: CardSelect,
  TEXT: TextComponent,
};

export default function Cards() {
  const { id } = useLocalSearchParams();
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleNextCard = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    const response = cards.filter(
      (card) => card.module_id === parseInt(id[0])
    )[0];

    setData(response.cards);
  }, []);

  useEffect(() => {
    console.log(index, data.length);

    if (data.length === 0) {
      return;
    }

    if (index === data.length) {
      setTimeout(() => {
        setIsFinished(true);
      }, 1000);
    }
  }, [index]);

  if (isFinished) {
    return (
      <S.Wrapper>
        <View style={{ paddingTop: 35 }}>
          <Text>Parabéns, você finalizou o módulo!</Text>
          <Link href="/" asChild>
            <Pressable>
              <Text>Finalizar</Text>
            </Pressable>
          </Link>
        </View>
      </S.Wrapper>
    );
  }

  const Component: React.FC<{ nextCard: () => void }> =
    CardComponent[data[index]?.type];

  if (Component === null || Component === undefined) {
    return <S.Wrapper />;
  }

  return (
    <S.Wrapper style={{ paddingTop: 35 }}>
      <S.Header>
        <Link href="/" asChild>
          <S.Close />
        </Link>

        <ProgressBar current={index} total={data.length} />

        <View />
      </S.Header>

      <Component nextCard={handleNextCard} {...data[index]} />
    </S.Wrapper>
  );
}
