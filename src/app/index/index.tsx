import { FlatList, View } from "react-native";
import * as S from "./styles";
import { ProgressBar } from "./components/ProgressBar";
import { Exercise } from "../../components/Exercise";
import { getModules } from "../../services/modules";
import { useEffect, useState } from "react";

export default function Home() {
  const [modules, setModules] = useState([]);

  const handleGetModules = async () => {
    const response = await getModules();

    setModules(response);
  };

  useEffect(() => {
    handleGetModules();
  }, []);

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
            <Exercise
              moduleId={module.id}
              title={module.title}
              state={"IN_PROGRESS"}
            />
          )}
          contentContainerStyle={{ paddingBottom: 180 }}
        />
      </View>
    </S.Wrapper>
  );
}
