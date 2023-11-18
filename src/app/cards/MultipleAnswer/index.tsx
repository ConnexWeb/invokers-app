import React, { useEffect, useState } from "react";

import * as S from "./styles";
import Button from "../../../components/Button";
import { CardMultipleChoice } from "../mockData";
import { View } from "react-native";
import Animation from "../Animation";

type Props = {
  nextCard: () => void;
} & CardMultipleChoice;

const MultipleAnswer = ({
  answer,
  answer2,
  answer3,
  answer4,
  correct_answer,
  question,
  imageUrl,
  nextCard,
}: Props) => {
  const [optionsAnswer, setOptionsAnswer] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isValidate, setIsValidate] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleSelected = (index: number) => {
    if (isValidate) return;

    setSelected(index);

    const options = optionsAnswer.map((option, i) => {
      if (i === index) {
        return {
          text: option.text,
          variant: "checking",
        };
      }

      return {
        text: option.text,
        variant: "disabled",
      };
    });

    setOptionsAnswer(options);
  };

  const handleValidated = () => {
    setIsValidate(true);

    const options = optionsAnswer.map((option, i) => {
      if (i === selected) {
        setIsCorrectAnswer(i === correct_answer - 1);

        return {
          text: option.text,
          variant: i === correct_answer - 1 ? "correct" : "incorrect",
        };
      }

      return {
        text: option.text,
        variant: "disabled",
      };
    });

    setOptionsAnswer(options);
  };

  const handleNextCard = () => {
    nextCard();
    setOptionsAnswer([]);
    setSelected(null);
    setIsValidate(false);
    setIsCorrectAnswer(false);
  };

  useEffect(() => {
    const options = [answer, answer2, answer3, answer4];

    const optionsAnswer = options.map((option) => {
      return {
        text: option,
        variant: "disabled",
      };
    });

    setOptionsAnswer(optionsAnswer);
  }, [answer]);

  return (
    <S.Wrapper>
      <S.Title>Escolha a correta:</S.Title>

      <View style={{ gap: 25 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <S.Question>{question}</S.Question>
        </View>

        {imageUrl && <S.Image source={{ uri: imageUrl }} />}

        <S.WrapperQuestions>
          <S.Questions>
            {optionsAnswer.map((answer, index) => (
              <Button
                onPress={() => handleSelected(index)}
                key={index}
                type="answer"
                variant={answer.variant}
              >
                {answer.text}
              </Button>
            ))}
          </S.Questions>
        </S.WrapperQuestions>
      </View>

      <S.WrapperButton>
        {isValidate && (
          <Button
            type="callToAction"
            onPress={handleNextCard}
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

export default MultipleAnswer;
