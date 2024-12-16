import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AnimatedOpacity from '@/components/ui/AnimatedOpacity';

const BudgetsScreen = () => {
  return (
    <View>
      <Text>Bugde</Text>
      <AnimatedOpacity className="bg-blue-500">
        <Text>Test</Text>
      </AnimatedOpacity>
    </View>
  );
};

export default BudgetsScreen;

const styles = StyleSheet.create({});
