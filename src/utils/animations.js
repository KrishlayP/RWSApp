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
