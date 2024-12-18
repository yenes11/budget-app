import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Progressbar from './ui/Progressbar';
import Icon from './ui/Icon';

const BudgetCard = () => {
  return (
    <View
      className="bg-white border border-gray-200 justify-center rounded-lg"
      style={{ width: Dimensions.get('window').width - 28 }}
    >
      <View className="flex-row items-center justify-between border-b border-gray-200 px-4 py-2">
        <Text className="text-2xl font-medium">Total Budget</Text>
        <Icon icon="wallet" color="rgb(59 130 246)" solid size={28} />
      </View>
      <View className="p-4">
        <View className="flex-1 gap-1">
          <Text className="text-sm  text-gray-500">$1000 / $1000</Text>
          <Progressbar progress={50} />
        </View>
      </View>
    </View>
  );
};

export default BudgetCard;
