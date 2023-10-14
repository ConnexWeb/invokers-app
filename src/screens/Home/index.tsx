import { FlatList, View, Text } from "react-native";
import * as S from "./styles";
import { ProgressBar } from "./components/ProgressBar";
import { Exercise } from "../../components/Exercise";

const mock = [
  {
    id: 1,
    title: "Módulo 1",
    data: [
      {
        id: 1,
        name: "Introdução ao League of Legends",
        description: "Guia para iniciantes",
        image:
          "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a2715ced150cb6e/5ef1374f6aaf2924fd231f62/league-client-update-header.jpg",
        state: "DONE",
      },
      {
        id: 2,
        name: "Básico de League of Legends",
        description: "Todas as informações que você precisa saber",
        image:
          "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a2715ced150cb6e/5ef1374f6aaf2924fd231f62/league-client-update-header.jpg",
        state: "IN_PROGRESS",
      },
      {
        id: 3,
        name: "Campeões",
        description: "Tudo sobre os campeões do League of Legends",
        image:
          "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a2715ced150cb6e/5ef1374f6aaf2924fd231f62/league-client-update-header.jpg",
        state: "BLOCKED",
      },
      {
        id: 4,
        name: "Campeões",
        description: "Tudo sobre os campeões do League of Legends",
        image:
          "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a2715ced150cb6e/5ef1374f6aaf2924fd231f62/league-client-update-header.jpg",
        state: "BLOCKED",
      },
      {
        id: 5,
        name: "Campeões",
        description: "Tudo sobre os campeões do League of Legends",
        image:
          "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a2715ced150cb6e/5ef1374f6aaf2924fd231f62/league-client-update-header.jpg",
        state: "BLOCKED",
      },
    ],
  },
  {
    id: 2,
    title: "Módulo 2",
    data: [
      {
        id: 1,
        name: "Introdução ao League of Legends",
        description: "Guia para iniciantes",
        image:
          "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a2715ced150cb6e/5ef1374f6aaf2924fd231f62/league-client-update-header.jpg",
        state: "BLOCKED",
      },
      {
        id: 2,
        name: "Básico de League of Legends",
        description: "Todas as informações que você precisa saber",
        image:
          "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a2715ced150cb6e/5ef1374f6aaf2924fd231f62/league-client-update-header.jpg",
        state: "BLOCKED",
      },
      {
        id: 3,
        name: "Campeões",
        description: "Tudo sobre os campeões do League of Legends",
        image:
          "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a2715ced150cb6e/5ef1374f6aaf2924fd231f62/league-client-update-header.jpg",
        state: "BLOCKED",
      },
      {
        id: 4,
        name: "Campeões",
        description: "Tudo sobre os campeões do League of Legends",
        image:
          "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a2715ced150cb6e/5ef1374f6aaf2924fd231f62/league-client-update-header.jpg",
        state: "BLOCKED",
      },
      {
        id: 5,
        name: "Campeões",
        description: "Tudo sobre os campeões do League of Legends",
        image:
          "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a2715ced150cb6e/5ef1374f6aaf2924fd231f62/league-client-update-header.jpg",
        state: "BLOCKED",
      },
    ],
  },
];

export const Home = () => {
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
          <ProgressBar actualProgress={0} />
        </S.WrapperProgress>

        <FlatList
          data={mock}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 10 }}>
              <S.ModuleTitle>{item.title}</S.ModuleTitle>
              <S.ModuleProgress>
                {checkDoneExercisesFromModule(item.data)}
              </S.ModuleProgress>
              <FlatList
                data={item.data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Exercise {...item} />}
              />
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 180 }}
        />
      </View>
    </S.Wrapper>
  );
};
