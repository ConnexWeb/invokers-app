import styled, { css } from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  ${({ theme, active }) => css`
    flex: 1;
    height: 200px;
    padding: 4px;
    background-color: ${theme.COLORS.GREY_600};
    margin: 5px;
    border-radius: 8px;

    ${active &&
    css`
      background-color: #8a2be2;
    `}
  `}
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin: 0 auto;
`;
