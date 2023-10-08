import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { CardEnum, data } from "./mockData";
import ShortsVideo from "./ShortsVideo";
import MultipleAnswers from "./MultipleAnswer";
import ImageAnswers from "./ImageAnswers";

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
    <View style={{ paddingTop: 35 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={handlePreviousCard}>
          <Text>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNextCard}>
          <Text>Próximo</Text>
        </TouchableOpacity>
      </View>

      {actualCard.type === CardEnum.SHORTS && <ShortsVideo {...actualCard} />}

      {actualCard.type === CardEnum.MULTIPLE_CHOICE && (
        <MultipleAnswers {...actualCard} />
      )}

      {actualCard.type === CardEnum.IMAGES_CHOICE && (
        <ImageAnswers {...actualCard} />
      )}
    </View>
  );
};
