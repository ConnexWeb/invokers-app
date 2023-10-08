import { ActivityIndicator } from "react-native";

import * as S from "./styles";

export type ButtonProps = {
  type: "answer" | "callToAction";
  variant?: "checking" | "correct" | "incorrect" | "disabled";
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

const ButtonImage = ({
  loading = false,
  type = "callToAction",
  variant = "disabled",
  children,
  onPress,
  disabled,
}: ButtonProps) => {
  return (
    <S.Wrapper
      onPress={onPress}
      type={type}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </S.Wrapper>
  );
};

export default ButtonImage;
