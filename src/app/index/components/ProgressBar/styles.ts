import { View } from "react-native";
import styled, { css } from "styled-components/native";

export const Bar = styled.View`
  position: absolute;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: #dbddde;
  opacity: 0.4;
`;

export const ProgressIndicatorText = styled.Text`
  font-size: 12px;
  color: white;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const ProgressIndicator = styled(View)`
  min-width: 32px;
  height: 23px;
  padding: 3px 6px;
  border-radius: 99px;
  background-color: #00b37e;
  margin-top: -8px;
  margin-left: -10px;
  align-items: center;
`;

export const Progress = styled.View<{
  progress: number;
}>`
  ${({ progress }) => css`
    width: ${`${progress}%`};
    height: 8px;
    border-radius: 8px;
    background-color: #00b37e;
  `}
`;

export const ProgressBar = styled.View`
  flex-direction: row;
`;
