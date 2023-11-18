import React, { useEffect, useState } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";

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
import { getModuleById } from "../../services/modules";

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
  const [isLoading, setIsLoading] = useState(false);

  const handleNextCard = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIndex(index + 1);
      setIsLoading(false);
    }, 400);
  };

  const handleGetCards = async () => {
    const response = await getModuleById(id);

    setData(response.cards);
  };

  useEffect(() => {
    handleGetCards();
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    if (index === data.length) {
      setIsFinished(true);
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

      {isLoading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#00875F" />
        </View>
      ) : (
        <Component nextCard={handleNextCard} {...data[index].data} />
      )}
    </S.Wrapper>
  );
}
