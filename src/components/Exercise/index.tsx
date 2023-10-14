import { View } from "react-native";
import * as S from "./styles";

export const Exercise = ({ state, image, name, description }) => (
  <S.Exercice>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <S.ExerciseImage source={{ uri: image }} />
      <View style={{ marginLeft: 15, width: "70%" }}>
        <S.ExerciseTitle>{name}</S.ExerciseTitle>
        <S.ExerciseDescription>{description}</S.ExerciseDescription>
      </View>
    </View>

    {
      {
        DONE: <S.Done />,
        IN_PROGRESS: <S.InProgress />,
        BLOCKED: <S.Blocked />,
      }[state]
    }
  </S.Exercice>
);
