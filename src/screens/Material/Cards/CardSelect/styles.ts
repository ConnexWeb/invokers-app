import styled, { css } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Questions = styled.View``;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 20px;
`;

export const Question = styled.Text`
  display: flex;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  width: 300px;
  margin: 10px auto;
  color: white;
`;

export const WrapperButton = styled.View`
  min-height: 110px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 100px;
  border-radius: 8px;
  margin: 10px auto;
`;

export const CheckIcon = styled(AntDesign).attrs(({ theme }) => ({
  name: "checkcircle",
  size: 24,
  color: "#8a2be2",
}))`
  width: 24px;
  height: 24px;
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 45px;
  background-color: white;
`;

const ButtonModifiers = {
  UNSELECT: (theme) => css`
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
  SELECTED: () => css`
    background: rgba(138, 43, 226, 0.2);
    border: 1px solid #8a2be2;
    border-bottom-color: #6a51b2;
    border-bottom-width: 4px;
    border-bottom-style: solid;
  `,
};

export const Button = styled.TouchableOpacity<{
  state: "UNSELECT" | "SELECTED";
}>`
  position: relative;
  border: 1px solid #e0e0e6;
  box-shadow: 0px 3px 0px #e0e0e6;
  height: 64px;
  margin-bottom: 16px;
  width: 100%;
  border-radius: 10px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, state }) => css`
    ${ButtonModifiers[state](theme)}
  `}
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 17.6px;
  line-height: 20px;
`;
