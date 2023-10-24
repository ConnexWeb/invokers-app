import { View } from "react-native";
import * as S from "./styles";
import { router } from "expo-router";

export const Exercise = ({ moduleId, state, image, name, description }) => {
  const handlePress = () => {
    if (state === "BLOCKED") return;

    router.push("/cards/" + moduleId);
  };

  return (
    <S.Exercice onPress={handlePress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <S.ExerciseImage source={{ uri: image }} />
        <View style={{ marginLeft: 12, width: "70%" }}>
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
};
