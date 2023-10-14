import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Track = styled.View`
  height: 14px;
  width: 100%;
  border-radius: 5px;
  background-color: #505059;
`;

export const Progress = styled(Animated.View)`
  height: 14px;
  background-color: #00b37e;
  border-radius: 8px;
`;
