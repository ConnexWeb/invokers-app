import React, { useCallback, useEffect, useRef, useState } from "react";
import { Text, Dimensions, View } from "react-native";
import YoutubePlayer, {
  InitialPlayerParams,
  YoutubeIframeRef,
} from "react-native-youtube-iframe";

import * as S from "./styles";
import { CardShorts } from "../mockData";

const PROGRESS_STEP = 5;
const PROGRESS_STEPS = 30;
const PROGRESS_INTERVAL = 1000;

const config: InitialPlayerParams = {
  controls: false,
  iv_load_policy: 3,
  modestbranding: false,
  preventFullScreen: true,
};

const ShortsVideo = ({ shortsUrl }: CardShorts) => {
  const playerRef = useRef<YoutubeIframeRef>(null);

  const [elapsed, setElapsed] = useState("");
  const [playing, setPlaying] = useState(true);

  const [finished, setFinished] = useState(false);

  const [showQuestion, setShowQuestion] = useState(false);

  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const validateQuestion = () => {
    setShowQuestion(false);
    setPlaying(true);
  };

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setFinished(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsed_sec = await playerRef.current?.getCurrentTime(); // this is a promise. dont forget to await

      // calculations
      const elapsed_ms = Math.floor(elapsed_sec * 1000);
      const ms = elapsed_ms % 1000;
      const min = Math.floor(elapsed_ms / 60000);
      const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);

      setElapsed(
        min.toString().padStart(2, "0") +
          ":" +
          seconds.toString().padStart(2, "0")
      );
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (elapsed === "00:02") {
      setPlaying(false);
      setShowQuestion(true);
    }
  }, [elapsed]);

  return (
    <View>
      <S.Wrapper pointerEvents="none">
        <YoutubePlayer
          ref={playerRef}
          play={playing}
          width={width}
          height={height}
          videoId={shortsUrl}
          initialPlayerParams={config}
          onChangeState={onStateChange}
          webViewProps={{
            // Remover aspect ratio do video -> https://github.com/LonelyCpp/react-native-youtube-iframe/issues/13#issuecomment-611753123
            injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            true;
          `,
          }}
        />
      </S.Wrapper>

      {/* {finished && (
        <View
          style={{
            position: "absolute",
            backgroundColor: "red",
            width,
            height,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Voce errouuu</Text>
        </View>
      )} */}

      {showQuestion && (
        <S.CardFooter style={{ top: height / 2, marginLeft: 20 }}>
          <S.CardFooterText>
            Qual a melhor jogada para fazer nessa situação sendo o yone?
          </S.CardFooterText>

          <S.Button onPress={validateQuestion}>
            <Text>Tankar a torre para a yummi não morrer</Text>
          </S.Button>

          <S.Button onPress={validateQuestion}>
            <Text>Levar a torre</Text>
          </S.Button>

          <S.Button onPress={validateQuestion}>
            <Text>Dar E para frente</Text>
          </S.Button>

          <S.Button onPress={validateQuestion}>
            <Text>Usar maestria</Text>
          </S.Button>
        </S.CardFooter>
      )}
    </View>
  );
};

export default ShortsVideo;
