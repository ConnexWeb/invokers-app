import React from "react";

import * as S from "./styles";
import ButtonImage from "../../../../components/ButtonImage";
import { CardImagesChoice } from "../mockData";
import { FlatList } from "react-native";
import Button from "../../../../components/Button";

type Props = {
  nextCard: () => void;
} & CardImagesChoice;

const ImageAnswers = ({ answer, options, isCorrect, nextCard }: Props) => {
  const [selected, setSelected] = React.useState(null);
  const [isValidate, setIsValidate] = React.useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = React.useState(false);

  const handleValidated = () => {
    setIsValidate(true);
    setIsCorrectAnswer(isCorrect === selected);
  };

  const handlePress = (index: number) => {
    if (isValidate) return;

    setSelected(index);
  };

  const handleNextCard = () => {
    nextCard();
    setIsValidate(false);
    setSelected(null);
  };

  return (
    <S.Wrapper>
      <FlatList
        data={options}
        keyExtractor={(item) => item}
        numColumns={2}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
        }}
        ListHeaderComponent={() => <S.Question>{answer}</S.Question>}
        renderItem={({ item, index }) => (
          <ButtonImage
            onPress={() => handlePress(index)}
            uri={item}
            active={index === selected}
            isCorrect={
              index === selected && isValidate ? isCorrectAnswer : null
            }
          />
        )}
      />

      <S.WrapperButton>
        {isValidate && (
          <Button
            onPress={handleNextCard}
            type="callToAction"
            variant={isCorrectAnswer ? "correct" : "incorrect"}
          >
            Próximo
          </Button>
        )}

        {!isValidate && (
          <>
            {selected !== null && (
              <Button
                onPress={handleValidated}
                type="callToAction"
                variant="checking"
              >
                Validar
              </Button>
            )}

            {selected === null && (
              <Button type="callToAction" variant="disabled">
                Validar
              </Button>
            )}
          </>
        )}
      </S.WrapperButton>
    </S.Wrapper>
  );
};

export default ImageAnswers;
