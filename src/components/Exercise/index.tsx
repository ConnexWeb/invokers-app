import { View } from "react-native";
import * as S from "./styles";
import { router } from "expo-router";

export const Exercise = ({ moduleId, state, title }) => {
  const handlePress = () => {
    if (state === "BLOCKED") return;

    router.push("/cards/" + moduleId);
  };

  return (
    <S.Exercice onPress={handlePress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <S.ExerciseImage
          source={{
            uri: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a2715ced150cb6e/5ef1374f6aaf2924fd231f62/league-client-update-header.jpg",
          }}
        />
        <View style={{ marginLeft: 12, width: "70%" }}>
          <S.ExerciseTitle>{title}</S.ExerciseTitle>
          <S.ExerciseDescription>Guia para iniciantes</S.ExerciseDescription>
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
