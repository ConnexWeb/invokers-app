import styled, { css } from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

export const Exercice = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 8px;
  background-color: #29292e;
  border-radius: 8px;
  margin: 10px 0;
  height: 80px;
`;

export const ExerciseTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 15px;
    font-weight: bold;
    color: white;
    font-family: ${theme.FONTS.BOLD};
  `}
`;

export const ExerciseDescription = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    color: #7c7c8a;
    font-family: ${theme.FONTS.REGULAR};
  `}
`;

export const ExerciseImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

export const InProgress = styled(Entypo).attrs({
  name: "chevron-right",
  size: 25,
  color: "#7C7C8A",
})`
  padding: 4px;
`;

export const Done = styled(Entypo).attrs({
  name: "check",
  size: 25,
  color: "#00B37E",
})`
  padding: 4px;
`;
``;

export const Blocked = styled(Entypo).attrs({
  name: "lock",
  size: 25,
  color: "#7C7C8A",
})`
  padding: 4px;
`;
``;
