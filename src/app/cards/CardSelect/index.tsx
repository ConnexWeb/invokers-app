import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { CardImagesChoice, CardSelectChoice } from "../mockData";
import Button from "../../../components/Button";
import { View } from "react-native";

type Props = {
  nextCard: () => void;
  isCorrects: number[];
} & CardSelectChoice;

export const CardSelect = ({
  answer,
  answer2,
  answer3,
  answer4,
  question,
  imageUrl,
  correctAnswers,
  nextCard,
}: Props) => {
  const [cardOptions, setCardOptions] = useState([]);
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [isValidate, setIsValidate] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleValidated = () => {
    setIsValidate(true);
    const aswersIndex = correctAnswers.map((answerMap) => answerMap - 1);

    const isCorrectSorted = aswersIndex.sort((a, b) => a - b);

    const optionsSelectedSorted = optionsSelected.sort((a, b) => a - b);

    JSON.stringify(isCorrectSorted) === JSON.stringify(optionsSelectedSorted);

    setIsCorrectAnswer(
      JSON.stringify(isCorrectSorted) === JSON.stringify(optionsSelectedSorted)
    );

    const optionsMapped = cardOptions.map((option, i) => {
      return {
        ...option,
        state: isCorrectSorted.includes(i) ? "CORRECT" : "INCORRECT",
      };
    });

    setCardOptions(optionsMapped);
  };

  const handlePress = (index: number) => {
    if (isValidate) return;

    if (optionsSelected.includes(index)) {
      const actualOptionsSelected = optionsSelected.filter(
        (option) => option !== index
      );

      const optionsMapped = cardOptions.map((option, i) => {
        if (index === i) {
          return {
            ...option,
            state: "UNSELECT",
          };
        }

        return {
          ...option,
        };
      });

      setCardOptions(optionsMapped);
      setOptionsSelected(actualOptionsSelected);

      return;
    }

    const actualOptionsSelected = [...optionsSelected, index];

    const optionsMapped = cardOptions.map((option, i) => {
      if (index === i) {
        return {
          ...option,
          state: "SELECTED",
        };
      }

      return {
        ...option,
      };
    });

    setCardOptions(optionsMapped);
    setOptionsSelected(actualOptionsSelected);
  };

  const handleNextCard = () => {
    nextCard();
    setIsValidate(false);
    setOptionsSelected([]);
  };

  useEffect(() => {
    const options = [answer, answer2, answer3, answer4];

    const optionsAnswer = options.map((option) => {
      return {
        text: option,
        state: "UNSELECT",
      };
    });

    setCardOptions(optionsAnswer);
  }, [answer]);

  return (
    <S.Wrapper>
      <View style={{ justifyContent: "center" }}>
        <S.Title>Escolha as respostas corretas:</S.Title>
      </View>

      <View style={{ gap: 25 }}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <S.Question>{question}</S.Question>
        </View>

        {imageUrl && (
          <S.Image resizeMode="contain" source={{ uri: imageUrl }} />
        )}

        <S.Questions>
          {cardOptions.map((answer, index) => (
            <S.Button
              key={index}
              onPress={() => handlePress(index)}
              state={answer.state}
            >
              <S.ButtonText>{answer.text}</S.ButtonText>

              {answer.state === "SELECTED" && <S.CheckIcon />}
            </S.Button>
          ))}
        </S.Questions>
      </View>

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
            {optionsSelected.length > 1 && (
              <Button
                onPress={handleValidated}
                type="callToAction"
                variant="checking"
              >
                Validar
              </Button>
            )}

            {optionsSelected.length <= 1 && (
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
