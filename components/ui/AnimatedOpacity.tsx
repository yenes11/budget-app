import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  PressableProps,
  GestureResponderEvent,
} from 'react-native';
import cn from 'classnames';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const AnimatedOpacity = (props: PressableProps) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value, { duration: 150 }) }],
      opacity: withTiming(opacity.value, { duration: 150 }),
    };
  });

  const handlePressIn = (e: GestureResponderEvent) => {
    scale.value = 0.95;
    opacity.value = 0.7;
    props.onPressIn?.(e);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    scale.value = 1;
    opacity.value = 1;
    props.onPressOut?.(e);
  };

  return (
    <AnimatedPressable
      {...props}
      style={[animatedStyle, props.style]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    />
  );
};

export default AnimatedOpacity;
