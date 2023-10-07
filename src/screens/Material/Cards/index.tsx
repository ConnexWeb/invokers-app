import React, { useState } from "react";
import { View, Text } from "react-native";

import { CardEnum, data } from "./mockData";
import ShortsVideo from "./ShortsVideo";

export const Cards = () => {
  const [index, setIndex] = useState(0);
  const [actualCard, setActualCard] = useState(data[index]);

  return (
    <View style={{ paddingTop: 35 }}>
      {actualCard.type === CardEnum.SHORTS && <ShortsVideo {...actualCard} />}
    </View>
  );
};
