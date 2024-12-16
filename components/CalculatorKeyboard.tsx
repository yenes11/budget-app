import BottomSheetBackdrop from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, {
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { ThemedText } from './ThemedText';
import { FullWindowOverlay } from 'react-native-screens';
import AnimatedOpacity from './ui/AnimatedOpacity';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  // onPress: (key: string) => void;
}

export interface CalculatorKeyboardRef {
  expand: () => void;
  close: () => void;
}

const keyCaps = [
  {
    value: 1,
    type: 'number',
  },
  {
    value: 2,
    type: 'number',
  },
  {
    value: 3,
    type: 'number',
  },
  {
    value: '÷',
    type: 'division',
  },
  {
    value: 4,
    type: 'number',
  },
  {
    value: 5,
    type: 'number',
  },
  {
    value: 6,
    type: 'number',
  },
  {
    value: '×',
    type: 'multiplication',
  },
  {
    value: 7,
    type: 'number',
  },
  {
    value: 8,
    type: 'number',
  },
  {
    value: 9,
    type: 'number',
  },
  {
    value: '+',
    type: 'addition',
  },
  {
    value: '–',
    type: 'subtraction',
  },
  {
    value: 0,
    type: 'number',
  },
  {
    value: '.',
    type: 'point',
  },
  {
    value: 'OK',
    type: 'ok',
  },
];

export const CalculatorKeyboard = forwardRef<CalculatorKeyboardRef, Props>(
  (props, ref) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const insets = useSafeAreaInsets();
    const snapPoints = [Dimensions.get('window').height * 0.5 + insets.bottom];

    useImperativeHandle(ref, () => ({
      expand: () => {
        bottomSheetModalRef.current?.present();
      },
      close: () => {
        bottomSheetModalRef.current?.dismiss();
      },
    }));

    return (
      <BottomSheetModal
        containerComponent={(props) => (
          <FullWindowOverlay>{props.children}</FullWindowOverlay>
        )}
        enableHandlePanningGesture={false}
        enableOverDrag={false}
        enablePanDownToClose={false}
        enableDynamicSizing={false}
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
      >
        <BottomSheetView
          style={[styles.contentContainer, { paddingBottom: insets.bottom }]}
        >
          <FlatList
            scrollEnabled={false}
            numColumns={4}
            data={keyCaps}
            contentContainerStyle={{
              flex: 1,
            }}
            renderItem={({ item }) => (
              <AnimatedOpacity
                className="flex-1 border border-gray-200 aspect-square items-center justify-center"
                onPress={() => {
                  console.log('pressed');
                }}
              >
                <ThemedText className="text-2xl">{item.value}</ThemedText>
              </AnimatedOpacity>
            )}
          />
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
  },
});
