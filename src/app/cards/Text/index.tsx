import React from "react";
import { useWindowDimensions } from "react-native";
import Button from "../../../components/Button";
import { CardText } from "../mockData";
import RenderHtml from "react-native-render-html";

import * as S from "./styles";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  nextCard: () => void;
} & CardText;

export const Text = ({ text, nextCard }: Props) => {
  const { width } = useWindowDimensions();

  const tagsStyles = {
    body: {
      color: "white",
    },
  };

  return (
    <S.Wrapper>
      <S.Title>Leia com atenção:</S.Title>

      <ScrollView style={{ marginBottom: 10 }}>
        <RenderHtml
          tagsStyles={tagsStyles}
          contentWidth={width}
          source={{ html: text }}
        />
      </ScrollView>

      <S.WrapperButton>
        <Button onPress={nextCard} type="callToAction" variant="checking">
          Próximo
        </Button>
      </S.WrapperButton>
    </S.Wrapper>
  );
};
