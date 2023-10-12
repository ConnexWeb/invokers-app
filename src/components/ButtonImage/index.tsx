import { ActivityIndicator } from "react-native";

import * as S from "./styles";

export type ButtonProps = {
  onPress?: () => void;
  active?: boolean;
  loading?: boolean;
  uri?: string;
};

const ButtonImage = ({ onPress, active, uri }: ButtonProps) => {
  return (
    <S.Wrapper onPress={onPress} active={active}>
      <S.Image source={{ uri }} />
    </S.Wrapper>
  );
};

export default ButtonImage;
