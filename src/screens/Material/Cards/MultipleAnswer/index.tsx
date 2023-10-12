import React, { useEffect, useState } from "react";

import * as S from "./styles";
import Button from "../../../../components/Button";
import { CardMultipleChoice } from "../mockData";

type Props = {
  nextCard: () => void;
} & CardMultipleChoice;

const MultipleAnswer = ({
  answer,
  isCorrect,
  options,
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

    const optionsAnswer = options.map((option, i) => {
      if (i === index) {
        return {
          text: option,
          variant: "checking",
        };
      }

      return {
        text: option,
        variant: "disabled",
      };
    });

    setOptionsAnswer(optionsAnswer);
  };

  const handleValidated = () => {
    setIsValidate(true);

    const optionsAnswer = options.map((option, i) => {
      if (i === selected) {
        setIsCorrectAnswer(i === isCorrect);

        return {
          text: option,
          variant: i === isCorrect ? "correct" : "incorrect",
        };
      }

      return {
        text: option,
        variant: "disabled",
      };
    });

    setOptionsAnswer(optionsAnswer);
  };

  const handleNextCard = () => {
    nextCard();
    setOptionsAnswer([]);
    setSelected(null);
    setIsValidate(false);
    setIsCorrectAnswer(false);
  };

  useEffect(() => {
    const optionsAnswer = options.map((option) => {
      return {
        text: option,
        variant: "disabled",
      };
    });

    setOptionsAnswer(optionsAnswer);
  }, [options]);

  return (
    <S.Wrapper>
      <S.WrapperQuestions>
        <S.Question>{answer}</S.Question>

        {imageUrl && <S.Image source={{ uri: imageUrl }} />}

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
