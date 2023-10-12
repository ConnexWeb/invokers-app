import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GREY_800};
    padding: 20px;
  `}
`;
