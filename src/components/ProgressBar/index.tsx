import { useEffect } from "react";

import * as S from "./styles";

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Props {
  total: number;
  current: number;
}

export function ProgressBar({ total, current }: Props) {
  const percentage = Math.round((current / total) * 100);

  const sharedProgress = useSharedValue(0);

  const styleAnimated = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`,
    };
  });

  useEffect(() => {
    sharedProgress.value = withTiming(percentage);
  }, [current]);

  return (
    <S.Track>
      <S.Progress style={styleAnimated} />
    </S.Track>
  );
}
