import { Pressable } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled(Pressable)``;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  z-index: 3;
  width: 100%;
`;

export const CardFooter = styled.View`
  padding: 10px;
  position: absolute;
  width: 90%;
  background-color: white;
  border-radius: 10px;
`;

export const CardFooterText = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: white;
  border-radius: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 10px;
`;
