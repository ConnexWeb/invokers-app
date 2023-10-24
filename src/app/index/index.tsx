import { FlatList, View } from "react-native";
import * as S from "./styles";
import { ProgressBar } from "./components/ProgressBar";
import { Exercise } from "../../components/Exercise";
import { modules } from "../../data/modules";

export default function Home() {
  const checkDoneExercisesFromModule = (exercises: any) => {
    const doneExercises = exercises.filter(
      (exercise: any) => exercise.state === "DONE"
    );
    return (
      doneExercises.length + " / " + exercises.length + " lições concluídas"
    );
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.ProfileImage
          source={{
            uri: "https://yt3.googleusercontent.com/ytc/APkrFKalYt5-9zxo9alw3Y6pFHOxwu1Biqd-RKShB1-SG_A=s176-c-k-c0x00ffffff-no-rj",
          }}
        />
        <View>
          <S.HeaderTitle>Olá, Fulano</S.HeaderTitle>
          <S.HeaderTitle>Seja bem-vindo(a) ao Invokers!</S.HeaderTitle>
        </View>
      </S.Header>

      <View style={{ paddingHorizontal: 20 }}>
        <S.ModuleTitle style={{ marginBottom: 10 }}>Bronze</S.ModuleTitle>

        <S.WrapperProgress>
          <ProgressBar actualProgress={1} />
        </S.WrapperProgress>

        <FlatList
          data={modules}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: module }) => (
            <View style={{ marginBottom: 10 }}>
              <S.ModuleTitle>{module.title}</S.ModuleTitle>

              <S.ModuleProgress>
                {checkDoneExercisesFromModule(module.data)}
              </S.ModuleProgress>

              <FlatList
                data={module.data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item: card }) => (
                  <Exercise {...card} moduleId={card.id} />
                )}
              />
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 180 }}
        />
      </View>
    </S.Wrapper>
  );
}
