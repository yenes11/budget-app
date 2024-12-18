import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Icon from './ui/Icon';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Animated, { SharedValue } from 'react-native-reanimated';
import { useAnimatedStyle } from 'react-native-reanimated';

interface TransactionItemProps {
  index: number;
  section: any;
}

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {
    console.log('showRightProgress:', prog.value);
    console.log('appliedTranslation:', drag.value);

    return {
      transform: [{ translateX: drag.value + 50 }],
    };
  });

  return (
    <Animated.View style={styleAnimation}>
      <Text style={styles.rightAction}>Text</Text>
    </Animated.View>
  );
}

const TransactionItem = ({ index, section }: TransactionItemProps) => {
  const isLastItem = index === section.data.length - 1;
  const isEven = index % 2 === 0;

  return (
    <View
      className={`px-4 bg-white py-2 mx-4 border-x border-gray-200 flex-row items-center gap-2 ${
        !isLastItem && 'border-b'
      }`}
    >
      <View
        className={`bg-gray-200 rounded-lg p-2`}
        // className={`${
        //   isEven ? 'bg-indigo-100' : 'bg-emerald-100'
        // } rounded-lg p-2`}
      >
        <Icon
          // color={isEven ? 'rgb(55 48 163)' : 'rgb(6 95 70)'}
          icon="shopping-cart"
        />
      </View>
      <View className="">
        <Text className="text-sm text-gray-600">Shopping</Text>
        <Text
          className={`text-xl font-semibold ${
            isEven ? 'text-rose-600' : 'text-green-600'
          }`}
        >
          -$300
        </Text>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  rightAction: { width: 50, height: 50, backgroundColor: 'purple' },
  separator: {
    width: '100%',
    borderTopWidth: 1,
  },
  swipeable: {
    height: 50,
    backgroundColor: 'papayawhip',
    alignItems: 'center',
  },
});

{
  /*<View className="flex-row px-4 py-2 border-b border-gray-200 items-center bg-white">
  <Ionicons
    name="bookmarks"
    size={16}
    className="p-2 bg-gray-100 rounded-full mr-2"
  />
  <View className="">
    <Text className="text-xs text-gray-600">Shopping</Text>
    <Text className="text-xl font-semibold">
      {String.fromCharCode(0x2212)}$100
    </Text>
  </View>
</View> */
}
