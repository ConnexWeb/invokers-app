import styled from "styled-components/native";

export const Wrapper = styled.View`
  max-width: 650px;
  align-self: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const WrapperQuestions = styled.View`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Questions = styled.View``;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fontfamily.nunito.bold};
`;

export const Question = styled.Text`
  display: flex;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  width: 300px;
  margin: 10px auto;
  font-family: ${({ theme }) => theme.fontfamily.nunito.bold};
`;

export const WrapperButton = styled.View`
  min-height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
