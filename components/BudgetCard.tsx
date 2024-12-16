import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Progressbar from './ui/Progressbar';
import Icon from './ui/Icon';

const BudgetCard = () => {
  return (
    <View
      className="bg-transparent border-gray-200 pt-6 justify-center rounded-lg"
      style={{ width: Dimensions.get('window').width }}
    >
      <View className="flex-row items-center gap-2 mb-3 border-gray-200 px-6 py-0">
        <Icon icon="wallet" solid size={24} />
        <Text className="text-xl font-medium">Total Budget</Text>
      </View>
      <View className="flex-row items-end mb-1 justify-between">
        <Text className="text-4xl ml-6 font-medium">$10000</Text>
        <Text className="text-2xl mr-6 font-bold">10%</Text>
      </View>

      <View className="px-6 pb-3">
        <View className="flex-1 gap-1">
          <Progressbar progress={50} />
          <View className="flex-row items-end justify-between">
            <Text className="font-medium text-gray-600 text-lg">
              $1000 spent
            </Text>
            <Text className="font-medium text-gray-600 text-lg">
              $9000 left
            </Text>
          </View>
          {/* <Text className="text-sm  text-gray-500">$358 left</Text> */}
        </View>
      </View>
    </View>
  );
};

export default BudgetCard;

{
  /**
  <View
      className="bg-white border border-gray-200 justify-center rounded-lg"
      style={{ width: Dimensions.get('window').width - 32 }}
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
  
*/
}
