import styled, { css } from "styled-components/native";
import { Text } from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: #121214;
`;

export const WrapperProgress = styled.View`
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    font-weight: bold;
    color: white;
    font-family: ${theme.FONTS.BOLD};
  `};
`;

export const ModuleTitle = styled(Text)`
  ${({ theme }) => css`
    font-size: 18px;
    font-weight: bold;
    color: white;
    font-family: ${theme.FONTS.BOLD};
  `};
`;

export const ModuleProgress = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-weight: bold;
    color: white;
    font-family: ${theme.FONTS.REGULAR};
  `};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  background-color: #202024;
  padding-top: 30px;
  margin-bottom: 15px;
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    color: white;
    font-family: ${theme.FONTS.REGULAR};
  `};
`;

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;
