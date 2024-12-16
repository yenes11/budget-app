import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useCallback, useRef } from 'react';
import AnimatedOpacity from './ui/AnimatedOpacity';
import { Ionicons } from '@expo/vector-icons';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const BudgetSelector = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <React.Fragment>
      <AnimatedOpacity className="px-4" onPress={handlePresentModalPress}>
        <Ionicons name="chevron-down" size={24} />
      </AnimatedOpacity>

      <BottomSheetModal
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
          />
        )}
        enableDynamicSizing={false}
        snapPoints={['50%']}
        ref={bottomSheetModalRef}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </React.Fragment>
  );
};

export default BudgetSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
