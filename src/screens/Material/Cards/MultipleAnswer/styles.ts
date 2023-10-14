import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const WrapperQuestions = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Questions = styled.View``;

export const Title = styled.Text``;

export const Question = styled.Text`
  font-size: 22px;
  margin: 0 auto;
  color: #fff;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  text-align: center;
`;

export const WrapperButton = styled.View`
  min-height: 110px;
`;

export const WrapperImage = styled.View`
  padding: 12px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 2px;
  margin: 10px auto;
`;
