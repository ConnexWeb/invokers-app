import * as S from "./styles";

type ProgressBarProps = {
  actualProgress: number;
};

export const ProgressBar = ({ actualProgress = 0 }: ProgressBarProps) => (
  <>
    <S.Bar />
    <S.ProgressBar>
      <S.Progress progress={actualProgress} />
      <S.ProgressIndicator
        style={{
          position: actualProgress >= 91 ? "absolute" : "relative",
          right: actualProgress >= 91 ? 0 : 0,
        }}
      >
        <S.ProgressIndicatorText>{actualProgress}%</S.ProgressIndicatorText>
      </S.ProgressIndicator>
    </S.ProgressBar>
  </>
);
