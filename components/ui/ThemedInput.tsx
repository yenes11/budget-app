import { View, Text, TextInput, TextInputProps } from 'react-native';
import React, { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

interface MaterialInputProps extends TextInputProps {
  label: string;
  icon?: React.ComponentType<any>;
}

const MaterialInput = ({ label, icon: Icon, ...props }: MaterialInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const labelAnimation = useAnimatedStyle(() => {
    const isActive = isFocused || hasValue;

    return {
      transform: [
        {
          translateY: withTiming(isActive ? -12 : 0, {
            duration: 100,
          }),
        },
      ],
      fontSize: withTiming(isActive ? 12 : 16, {
        duration: 100,
      }),
      color: withTiming(isFocused ? '#1976D2' : '#666', { duration: 100 }),
    };
  });

  return (
    <View className="relative mb-4">
      <View className="flex-row items-center bg-gray-200 rounded-xl">
        {Icon && (
          <View className="pl-3">
            <Icon size={20} color={isFocused ? '#1976D2' : '#666'} />
          </View>
        )}

        <View className="flex-1 justify-center">
          <Animated.Text style={[labelAnimation]} className="absolute left-4">
            {label}
          </Animated.Text>

          <TextInput
            {...props}
            className="pt-6 pb-3 px-4 text-xl"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={(text) => {
              setHasValue(text.length > 0);
              props.onChangeText?.(text);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MaterialInput;
