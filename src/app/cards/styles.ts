import styled, { css } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.COLORS.GREY_800};
    padding: 22px;
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding: 15px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    margin: 2px 0;
    color: ${theme.COLORS.GREY_100};
    font-weight: bold;
  `}
`;

export const Close = styled(AntDesign).attrs(({ theme }) => ({
  name: "close",
  size: 18,
  color: theme.COLORS.GREY_100,
}))``;

export const VerticalThreeDots = styled(Entypo).attrs(({ theme }) => ({
  name: "dots-three-vertical",
  size: 18,
  color: theme.COLORS.GREY_100,
}))``;
