import styled, { css } from "styled-components/native";

import { ButtonProps } from "./index";

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
      checking: () => css`
        background: #f2ecf8;

        border: 1px solid #6a51b2;

        border-bottom-color: #6a51b2;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,

      correct: () => css`
        background: #d7ffb8;
        border: 1px solid #58a700;

        border-bottom-color: #58a700;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,

      incorrect: () => css`
        background: #ffdfe0;
        border: 1px solid #ea2b2b;

        border-bottom-color: #ea2b2b;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,

      disabled: () => css`
        border: 1px solid #e0e0e6;
        border-bottom-color: #e0e0e6;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,
    },

    callToAction: {
      checking: () => css`
        background-color: #8d5dc6;

        border: 1px solid #8d5dc6;

        border-bottom-color: #6a51b2;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,

      correct: () => css`
        background: #58cc02;

        border: 1px solid #58cc02;

        border-bottom-color: #58a700;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,

      incorrect: () => css`
        background: #ff4b4b;

        background: #ff4b4b;

        border: 1px solid #ff4b4b;

        border-bottom-color: #ea2b2b;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,

      disabled: () => css`
        background: #f4f4f4;

        border: 1px solid #f4f4f4;

        border-bottom-color: #dbdbdb;
        border-bottom-width: 4px;
        border-bottom-style: solid;
      `,
    },
  },
};

export const Wrapper = styled.TouchableOpacity<Props>`
  ${({ type, variant = "disabled" }) => css`
    width: 100%;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    ${!!type && WrapperModifier.type[type]}
    ${!!variant && WrapperModifier.variant[type][variant]}
  `}
`;

const TextModifier = {
  type: {
    answer: () => css`
      font-size: 17.6px;
      line-height: 20px;
    `,

    callToAction: () => css`
      font-style: normal;
      font-size: 16px;
      line-height: 24px;
      color: white;
    `,
  },

  variant: {
    answer: {
      checking: () => css`
        color: #36344b;
      `,

      correct: () => css`
        color: #58a700;
      `,

      incorrect: () => css`
        color: #ea2b2b;
      `,

      disabled: () => css`
        color: #36344b;
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
    ${!!type && TextModifier.type[type]}
    ${!!variant && TextModifier.variant[type][variant]}
  `}
`;
