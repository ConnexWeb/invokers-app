import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 20px;
`;

export const WrapperButton = styled.View`
  min-height: 110px;
`;

export const Image = styled.Image`
  width: 300px;
  height: 200px;
  margin: 0 auto;
`;

export const Question = styled.Text`
  font-size: 22px;
  margin: 0 auto;
  color: #fff;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  text-align: center;
`;
