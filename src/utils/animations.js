export const getStepAnimationStyle = (animValue) => ({
  opacity: animValue,

  transform: [
    {
      translateY: animValue.interpolate({
        inputRange: [0, 1],

        outputRange: [18, 0],
      }),
    },
  ],
});

export const getFadeUpStyle = (animValue, distance = 18) => ({
  opacity: animValue,
  transform: [
    {
      translateY: animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [distance, 0],
      }),
    },
    {
      scale: animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.98, 1],
      }),
    },
  ],
});

export const getPressScaleStyle = (animValue) => ({
  transform: [
    {
      scale: animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.96, 1],
      }),
    },
  ],
});
