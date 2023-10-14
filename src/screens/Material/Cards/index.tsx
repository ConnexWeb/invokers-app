import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

import { ProgressBar } from "../../../components/ProgressBar";
import { data } from "./mockData";
import ShortsVideo from "./ShortsVideo";
import MultipleAnswers from "./MultipleAnswer";
import ImageAnswers from "./ImageAnswers";
import { Image } from "./Image";
import { CardSelect } from "./CardSelect";

import * as S from "./styles";

const CardComponent = {
  SHORTS: ShortsVideo,
  MULTIPLE_CHOICE: MultipleAnswers,
  IMAGES_CHOICE: ImageAnswers,
  IMAGE: Image,
  SELECT: CardSelect,
};

export const Cards = () => {
  const [index, setIndex] = useState(0);
  const [actualCard, setActualCard] = useState(data[index]);
  const [isFinished, setIsFinished] = useState(false);

  const handleNextCard = () => {
    if (index === data.length - 1) {
      setIndex(index + 1);
      setIsFinished(true);
      return;
    }

    setIndex(index + 1);
    setActualCard(data[index + 1]);
  };

  const handlePreviousCard = () => {
    if (index === 0) {
      return;
    }

    setIndex(index - 1);
    setActualCard(data[index - 1]);
  };

  const handleFinish = () => {
    setIndex(0);
    setIsFinished(false);
  };

  const Component: React.FC<{ nextCard: () => void }> =
    CardComponent[actualCard.type];

  if (Component === null || Component === undefined) {
    return null;
  }

  return (
    <S.Wrapper style={{ paddingTop: 35 }}>
      <S.Header>
        <View />

        <S.Title>Questões básicas</S.Title>

        <View>
          <S.Title>
            {index}/{data.length}
          </S.Title>
        </View>
      </S.Header>

      <ProgressBar current={index} total={data.length} />

      {!isFinished ? (
        <Component nextCard={handleNextCard} {...actualCard} />
      ) : (
        <View>
          <S.Title>Questões básicas</S.Title>
          <Text>Parabéns, você finalizou o módulo!</Text>
          <Pressable onPress={handleFinish}>
            <Text>Finalizar</Text>
          </Pressable>
        </View>
      )}
    </S.Wrapper>
  );
};
