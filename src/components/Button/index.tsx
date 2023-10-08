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

const Button = ({
  loading = false,
  type = "callToAction",
  variant = "disabled",
  children,
  onPress,
  disabled,
}: ButtonProps) => {
  return (
    <S.Wrapper onPress={onPress} type={type} variant={variant} disabled={disabled}>
      <S.Text type={type} variant={variant}>
        {loading ? <ActivityIndicator size="small" color={variant === "checking" ? "white" : "#733EB1"} /> : children}
      </S.Text>
    </S.Wrapper>
  );
};

export default Button;
