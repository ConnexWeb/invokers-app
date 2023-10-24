import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: #00b37e;
    font-family: ${theme.FONTS.BOLD};
    margin-bottom: 10px;
  `}
`;

export const WrapperQuestions = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Questions = styled.View``;

export const Question = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    color: #fff;
    font-family: ${theme.FONTS.BOLD};
    text-align: center;
  `}
`;

export const WrapperButton = styled.View`
  min-height: 110px;
`;

export const WrapperImage = styled.View`
  padding: 12px;
`;

export const Image = styled.Image`
  width: 90%;
  margin: 0 auto;
  height: 200px;
  border-radius: 12px;
`;
