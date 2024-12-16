import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useCallback, useRef } from 'react';
import AnimatedOpacity from './ui/AnimatedOpacity';
import { Ionicons } from '@expo/vector-icons';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import Icon from './ui/Icon';

const snapPoints = ['85%'];

const AddTransactionSheet = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <React.Fragment>
      <AnimatedOpacity
        onPress={handlePresentModalPress}
        className="absolute bottom-4 right-4 bg-black rounded-full p-4 z-50 flex-row items-center gap-2"
      >
        <Icon icon="plus" color="white" size={24} />
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
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
      >
        <BottomSheetView style={styles.contentContainer}></BottomSheetView>
      </BottomSheetModal>
    </React.Fragment>
  );
};

export default AddTransactionSheet;

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
