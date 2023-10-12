import styled, { css } from "styled-components/native";

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
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 13px;
    color: ${theme.COLORS.GREY_100};
    font-weight: bold;
  `}
`;
