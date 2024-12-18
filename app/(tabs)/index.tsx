import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  Button,
  Dimensions,
  SectionList,
} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import BudgetSelector from '@/components/BudgetSelector';
import BudgetCard from '@/components/BudgetCard';
import TransactionItem from '@/components/TransactionItem';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '@/components/ui/Icon';
import AnimatedOpacity from '@/components/ui/AnimatedOpacity';
import AddTransactionSheet from '@/components/AddTransactionSheet';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <AnimatedOpacity
        onPress={() => router.push('/add-transaction')}
        className="absolute bottom-4 right-4 bg-blue-600 rounded-full p-4 z-50 flex-row items-center gap-2"
      >
        <Icon icon="plus" color="white" size={24} />
      </AnimatedOpacity>

      {/* <AddTransactionSheet /> */}

      <SectionList
        contentContainerClassName=""
        showsVerticalScrollIndicator
        ListHeaderComponent={() => (
          <FlatList
            className="my-4"
            data={Array.from({ length: 10 }, (_, index) => index)}
            contentContainerStyle={{ gap: 28, paddingHorizontal: 14 }}
            renderItem={() => <BudgetCard />}
            keyExtractor={(item) => item.toString()}
            horizontal
            snapToAlignment="center"
            snapToInterval={Dimensions.get('window').width}
            decelerationRate={0.5}
            showsHorizontalScrollIndicator={false}
          />
        )}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={(props) => <TransactionItem {...props} />}
        renderSectionHeader={({ section: { title } }) => (
          <View className="flex-row items-center justify-between mx-4 border border-gray-200 px-4 py-1 bg-gray-50">
            <Text className="text-sm text-gray-500 font-medium">
              12-11-2024
            </Text>
            <Text className="text-sm text-green-700 font-medium">+$300</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

{
  /* <View className="mb-2 mx-4 mt-4 flex-row items-center gap-1">
        <Text className="text-2xl font-semibold ">Transactions</Text>
      </View>
      <View className="mx-4 my-1 gap-2 flex-row">
        <Text className="text-sm text-gray-600">Yesterday</Text>
        <View className="flex-row flex-1 border-gray-300 h-[55%] items-center border-b gap-1"></View>
        <Text className="text-sm text-gray-600">+3600$</Text>
      </View>{' '}
      <View className="bg-white border border-gray-200 rounded-lg mx-4 overflow-hidden">
        {Array.from({ length: 2 }).map((_, index) => (
          <TransactionItem key={index} />
        ))}
      </View>
      <View className="mx-4 my-1 gap-2 flex-row">
        <Text className="text-sm text-gray-600">Yesterday</Text>
        <View className="flex-row flex-1 border-gray-300 h-[55%] items-center border-b gap-1"></View>
        <Text className="text-sm text-gray-600">+3600$</Text>
      </View>
      <View className="bg-white border border-gray-200 rounded-lg mx-4 overflow-hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <TransactionItem key={index} />
        ))}
      </View> */
}
