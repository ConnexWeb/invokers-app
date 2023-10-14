import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Question = styled.Text`
  font-size: 23px;
  margin: 20px auto;
  color: #fff;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  text-align: center;
`;

export const WrapperButton = styled.View`
  min-height: 110px;
`;
