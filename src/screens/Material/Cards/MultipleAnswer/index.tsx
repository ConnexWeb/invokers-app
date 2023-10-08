import React, { useState } from "react";

import * as S from "./styles";
import Button from "../../../../components/Button";
import { CardMultipleChoice } from "../mockData";

const MultipleAnswer = ({ answer, options, imageUrl }: CardMultipleChoice) => {
  return (
    <S.Wrapper>
      <S.WrapperQuestions>
        <S.Question>{answer}</S.Question>

        {imageUrl && <S.Image source={{ uri: imageUrl }} />}

        <S.Questions>
          {options.map((answer, index) => (
            <Button key={index} type="answer">
              {answer}
            </Button>
          ))}
        </S.Questions>
      </S.WrapperQuestions>

      <S.WrapperButton>
        <Button type="callToAction">Próximo</Button>
      </S.WrapperButton>
    </S.Wrapper>
  );
};

export default MultipleAnswer;
