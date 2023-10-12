import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { CardEnum, data } from "./mockData";
import ShortsVideo from "./ShortsVideo";
import MultipleAnswers from "./MultipleAnswer";
import ImageAnswers from "./ImageAnswers";
import { Image } from "./Image";
import { CardSelect } from "./CardSelect";

import * as S from "./styles";

export const Cards = () => {
  const [index, setIndex] = useState(0);
  const [actualCard, setActualCard] = useState(data[index]);

  const handleNextCard = () => {
    if (index === data.length - 1) {
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

  return (
    <S.Wrapper style={{ paddingTop: 35 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={handlePreviousCard}>
          <Text>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNextCard}>
          <Text>Próximo</Text>
        </TouchableOpacity>
      </View>

      {actualCard.type === CardEnum.SHORTS && (
        <ShortsVideo nextCard={handleNextCard} {...actualCard} />
      )}

      {actualCard.type === CardEnum.MULTIPLE_CHOICE && (
        <MultipleAnswers nextCard={handleNextCard} {...actualCard} />
      )}

      {actualCard.type === CardEnum.IMAGES_CHOICE && (
        <ImageAnswers nextCard={handleNextCard} {...actualCard} />
      )}

      {actualCard.type === CardEnum.IMAGE && (
        <Image nextCard={handleNextCard} {...actualCard} />
      )}

      {actualCard.type === CardEnum.SELECT && (
        <CardSelect nextCard={handleNextCard} {...actualCard} />
      )}
    </S.Wrapper>
  );
};
