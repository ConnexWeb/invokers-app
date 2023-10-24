import styled, { css } from "styled-components/native";

import { ButtonProps } from "./index";
import { DefaultTheme } from "styled-components";

type Props = Pick<ButtonProps, "type" | "variant">;

const WrapperModifier = {
  type: {
    answer: () => css`
      border: 1px solid #e0e0e6;
      box-shadow: 0px 3px 0px #e0e0e6;
      height: 64px;
      font-size: 17px;
      margin-bottom: 16px;
    `,

    callToAction: () => css`
      font-size: 16px;
      padding: 13px 0;
    `,
  },

  variant: {
    answer: {
      checking: (theme: DefaultTheme) => css`
        background: rgba(138, 43, 226, 0.2);

        border: 1px solid #8a2be2;

        border-bottom-color: #6a51b2;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,

      correct: (theme: DefaultTheme) => css`
        background: ${theme.COLORS.BRAND_MID};
        border: 1px solid #005139;

        border-bottom-color: #58a700;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,

      incorrect: (theme: DefaultTheme) => css`
        background: ${theme.COLORS.DANGER_LIGHT};
        border: 1px solid #7b2d34;

        border-bottom-color: #ea2b2b;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,

      disabled: (theme: DefaultTheme) => css`
        border: 1px solid #e0e0e6;
        border-bottom-color: #e0e0e6;
        border-bottom-width: 4px;
        border-bottom-style: solid;

        background: ${theme.COLORS.GREY_500};

        border: 1px solid ${theme.COLORS.GREY_700};

        border-bottom-color: #6a51b2;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,
    },

    callToAction: {
      checking: () => css`
        background-color: #8a2be2;
      `,

      correct: (theme) => css`
        background: ${theme.COLORS.BRAND_MID};
      `,

      incorrect: (theme) => css`
        background: ${theme.COLORS.DANGER_LIGHT};
      `,

      disabled: (theme) => css`
        border: 1px solid #e0e0e6;
        border-bottom-color: #e0e0e6;
        border-bottom-width: 4px;
        border-bottom-style: solid;

        background: ${theme.COLORS.GREY_500};

        border: 1px solid ${theme.COLORS.GREY_700};

        border-bottom-color: #6a51b2;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,
    },
  },
};

export const Wrapper = styled.TouchableOpacity<Props>`
  ${({ theme, type, variant = "disabled" }) => css`
    width: 100%;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    ${!!type && WrapperModifier.type[type]}
    ${!!variant && WrapperModifier.variant[type][variant](theme)}
  `}
`;

const TextModifier = {
  type: {
    answer: () => css`
      font-size: 14px;
    `,

    callToAction: () => css`
      font-style: normal;
      font-size: 14px;
      line-height: 24px;
      color: white;
    `,
  },

  variant: {
    answer: {
      checking: () => css`
        color: #8a2be2;
      `,

      correct: () => css`
        color: white;
      `,

      incorrect: () => css`
        color: white;
      `,

      disabled: () => css`
        color: white;
      `,
    },

    callToAction: {
      checking: () => css`
        color: white;
      `,

      correct: () => css``,

      incorrect: () => css``,

      disabled: () => css`
        color: #bbbbbb;
      `,
    },
  },
};

export const Text = styled.Text<Props>`
  ${({ theme, type, variant = "disabled" }) => css`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    ${!!type && TextModifier.type[type]}
    ${!!variant && TextModifier.variant[type][variant]}
  `}
`;
