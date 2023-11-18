import { Dimensions } from "react-native";
import Animated, { Keyframe } from "react-native-reanimated";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Animation = ({ children }) => {
  const enteringKeyframe = new Keyframe({
    0: {
      opacity: 0,
      transform: [
        { translateX: SCREEN_WIDTH },
        {
          rotate: "30deg",
        },
      ],
    },

    70: {
      opacity: 0.3,
    },

    100: {
      opacity: 1,
      transform: [
        { translateX: 0 },
        {
          rotate: "0deg",
        },
      ],
    },
  });

  const exitingKeyframe = new Keyframe({
    from: {
      opacity: 1,
      transform: [
        { translateX: 0 },
        {
          rotate: "0deg",
        },
      ],
    },

    to: {
      opacity: 1,
      transform: [
        { translateX: SCREEN_WIDTH * -1 },
        {
          rotate: "-30deg",
        },
      ],
    },
  });

  return (
    <Animated.View
      entering={enteringKeyframe}
      exiting={exitingKeyframe}
      style={{ flex: 1 }}
    >
      {children}
    </Animated.View>
  );
};

export default Animation;
