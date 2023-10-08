import React, { useState } from "react";
import { Text, View } from "react-native";

import * as S from "./styles";
import ButtonImage from "../../../../components/ButtonImage";
import { CardImagesChoice } from "../mockData";
import { FlatList } from "react-native";

const ImageAnswers = ({ answer, options }: CardImagesChoice) => {
  return (
    <S.Wrapper>
      <S.WrapperQuestions>
        <S.Question>{answer}</S.Question>

        <FlatList
          style={{ flex: 1, backgroundColor: "red" }}
          data={options}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ flex: 1, height: "100%" }}>
              <ButtonImage type="answer">
                <S.Image source={{ uri: item }} />
              </ButtonImage>
            </View>
          )}
        />
      </S.WrapperQuestions>
    </S.Wrapper>
  );
};

export default ImageAnswers;
