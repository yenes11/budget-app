import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Progressbar = ({ progress }: { progress: number }) => {
  const animatedProgress = useSharedValue(progress);

  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(animatedProgress.value),
  }));

  return (
    <Animated.View className="w-full bg-gray-200 rounded-full">
      <Animated.View
        className="h-3 bg-black rounded-full"
        style={animatedStyle}
      />
      {/* <Text>{progress}%</Text> */}
    </Animated.View>
  );
};

export default Progressbar;
