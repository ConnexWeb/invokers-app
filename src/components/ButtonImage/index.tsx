import * as S from "./styles";

export type ButtonProps = {
  onPress?: () => void;
  active: boolean;
  loading?: boolean;
  uri?: string;
  isCorrect?: boolean;
};

const ButtonImage = ({
  onPress,
  active,
  uri,
  isCorrect = null,
}: ButtonProps) => {
  console.log("isCorrect", isCorrect);

  return (
    <S.Wrapper active={active} onPress={onPress} isCorrect={isCorrect}>
      <S.Image source={{ uri }} />
    </S.Wrapper>
  );
};

export default ButtonImage;
