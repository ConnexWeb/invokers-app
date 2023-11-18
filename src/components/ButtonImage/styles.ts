import styled, { css } from "styled-components/native";

export const Wrapper = styled.Pressable<{
  active: boolean;
  isCorrect?: boolean;
}>`
  ${({ theme, active, isCorrect }) => css`
    flex: 1;
    padding: 4px;
    height: 150px;
    background-color: ${theme.COLORS.GREY_600};
    margin: 5px;
    border-radius: 8px;

    ${active &&
    css`
      background-color: #8a2be2;
    `}

    ${isCorrect !== null &&
    active &&
    css`
      ${isCorrect && `background-color: #00ff00;`}

      ${!isCorrect && `background-color: #ff0000;`}
    `}
  `}
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin: 0 auto;
`;
