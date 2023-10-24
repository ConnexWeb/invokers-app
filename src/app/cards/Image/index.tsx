import Button from "../../../components/Button";
import { CardImagesChoice } from "../mockData";

import * as S from "./styles";

type Props = {
  nextCard: () => void;
} & CardImagesChoice;

export const Image = ({ title, imageUrl, description, nextCard }: Props) => (
  <S.Wrapper>
    <S.Title>Leia com atenção:</S.Title>

    <S.Question>{title}</S.Question>

    <S.Image resizeMode="contain" source={{ uri: imageUrl }} />

    <S.Question>{description}</S.Question>

    <S.WrapperButton>
      <Button onPress={nextCard} type="callToAction" variant="checking">
        Próximo
      </Button>
    </S.WrapperButton>
  </S.Wrapper>
);
