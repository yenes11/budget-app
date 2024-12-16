import {
  View,
  Text,
  Button,
  Keyboard,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ThemedInput from '@/components/ui/ThemedInput';
import { ThemedText } from '@/components/ThemedText';
import CategoryAvatar from '@/components/ui/CategoryAvatar';
import {
  CalculatorKeyboard,
  CalculatorKeyboardRef,
} from '@/components/CalculatorKeyboard';

const AddTransactionScreen = () => {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    category: '',
  });

  const [amount, setAmount] = useState(0);
  const handleFormChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };
  const calculatorKeyboardRef = useRef<CalculatorKeyboardRef>(null);

  // useEffect(() => {
  //   calculatorKeyboardRef.current?.expand();

  //   return () => {
  //     calculatorKeyboardRef.current?.close();
  //   };
  // }, []);

  return (
    <View className="flex-1 bg-white p-4">
      {/* <CalculatorKeyboard ref={calculatorKeyboardRef} /> */}
      {/* <ThemedText className="font-semibold mb-1 text-gray-600">
        Title
      </ThemedText> */}
      <View className="flex-row items-center justify-between">
        <ThemedText>{amount}</ThemedText>
      </View>
      <ThemedInput
        label="Title"
        onChangeText={(value) => handleFormChange('title', value)}
        className="mb-4"
      />
      {/* <ThemedText className="font-semibold mb-1 text-gray-600">
        Amount
      </ThemedText> */}
      <ThemedInput
        nativeID="amount"
        label="Amount"
        onChangeText={(value) => handleFormChange('amount', value)}
        className="mb-4"
      />
      <ThemedText className="font-semibold mb-1 text-gray-600">
        Category
      </ThemedText>
      <View className="justify-center self-start items-center">
        <CategoryAvatar iconSize={32} className="p-4" icon="shopping-cart" />
        <Text className=" text-sm text-gray-600">Shopping</Text>
      </View>
      <Button title="Add Transaction" onPress={Keyboard.dismiss} />
    </View>
  );
};

export default AddTransactionScreen;
