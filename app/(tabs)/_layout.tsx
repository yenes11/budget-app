import { Tabs } from 'expo-router';
import AnimatedOpacity from '@/components/ui/AnimatedOpacity';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import BudgetSelector from '@/components/BudgetSelector';
import Icon from '@/components/ui/Icon';
import { Text } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        headerTitle: 'Home',
        headerTitleStyle: {
          // color: 'white',
        },
        headerBackgroundContainerStyle: {
          borderBottomWidth: 0,
        },
        // headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#f9fafb',
        },
        tabBarButton: AnimatedOpacity,
        headerRight: () => <BudgetSelector />,
        // headerLeft(props) {
        //   return (
        //     <AnimatedOpacity className="flex-row rounded-full p-2 ml-4 items-center gap-2 ">
        //       <Icon icon="plus" size={16} />
        //       <Text>Add</Text>
        //     </AnimatedOpacity>
        //   );
        // },
        tabBarBackground: TabBarBackground,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused, size }) => (
            <Icon icon="home" size={size} solid={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="budgets"
        options={{
          title: 'Budgets',
          tabBarIcon: ({ color, focused, size }) => (
            <Icon icon="wallet" size={size} solid={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ color, focused, size }) => (
            <Icon icon="tag" size={size} solid={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Reports',
          tabBarIcon: ({ color, focused, size }) => (
            <Icon icon="chart-bar" size={size} solid={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="options"
        options={{
          title: 'Options',
          tabBarIcon: ({ color, focused, size }) => (
            <Icon
              icon="cog-8-tooth"
              size={size}
              solid={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
