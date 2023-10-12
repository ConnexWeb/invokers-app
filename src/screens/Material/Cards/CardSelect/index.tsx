import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import { CardImagesChoice } from "../mockData";
import Button from "../../../../components/Button";

type Props = {
  nextCard: () => void;
} & CardImagesChoice;

export const CardSelect = ({
  answer,
  imageUrl,
  options,
  isCorrects,
  nextCard,
}: Props) => {
  const [cardOptions, setCardOptions] = useState([]);
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [isValidate, setIsValidate] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleValidated = () => {
    setIsValidate(true);
    const isCorrectSorted = isCorrects.sort((a, b) => a - b);
    const optionsSelectedSorted = optionsSelected.sort((a, b) => a - b);

    console.log(
      JSON.stringify(isCorrectSorted),
      JSON.stringify(optionsSelectedSorted)
    );

    setIsCorrectAnswer(
      JSON.stringify(isCorrectSorted) === JSON.stringify(optionsSelectedSorted)
    );
  };

  const handlePress = (index: number) => {
    if (isValidate) return;

    setSelected(index);

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
    setSelected(null);
    setOptionsSelected([]);
  };

  useEffect(() => {
    const optionsMapped = options.map((option) => {
      return {
        answer: option,
        state: "UNSELECT",
      };
    });

    setCardOptions(optionsMapped);
  }, []);

  return (
    <S.Wrapper>
      <S.Question>{answer}</S.Question>

      {imageUrl && <S.Image resizeMode="contain" source={{ uri: imageUrl }} />}

      <S.Questions>
        {cardOptions.map((answer, index) => (
          <>
            <S.Button onPress={() => handlePress(index)} state={answer.state}>
              <S.ButtonText>{answer.answer}</S.ButtonText>

              {answer.state === "SELECTED" && <S.CheckIcon />}
            </S.Button>
          </>
        ))}
      </S.Questions>

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
