import React, { ReactNode, useEffect, useRef } from "react";
import {
    Animated,
    BackHandler,
    Modal,
    Pressable,
    View,
} from "react-native";
import {
    GestureHandlerRootView,
    PanGestureHandler,
} from "react-native-gesture-handler";
//styles
import { bottomSheetStyle } from "./Styles/bottomSheetStyles";
import { GlobalStyles } from "../../Styles/GlobalStyles";
//constants
import { WINDOW_HEIGHT } from "../../Constants/constants";

interface Props {
    show: boolean;
    heightPer: number;
    headerComponent?: ReactNode;
    childComponent: ReactNode;
    onDismiss: () => void;
}

export default function BottomSheet(props: Props) {
    const { show, heightPer, headerComponent, childComponent, onDismiss } = props;
    const bottomSheetHeight = WINDOW_HEIGHT * heightPer;
    const marginTop = WINDOW_HEIGHT - bottomSheetHeight;
    const bottom = useRef(new Animated.Value(bottomSheetHeight)).current;

    useEffect(() => {
        const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackPress);
        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        if (show) {
            animationDuration(0, 400, false);
        } else {
            closeBottomSheet();
        }
    }, [show]);

    const closeBottomSheet = () => {
        animationDuration(bottomSheetHeight, 300, true);
    };

    const handleBackPress = () => {
        closeBottomSheet();
        return false;
    };

    const animationDuration = (value: number, duration: number, closeAfterAnimation: boolean) => {
        Animated.timing(bottom, {
            toValue: value,
            duration: duration,
            useNativeDriver: false,
        }).start(() => {
            if (closeAfterAnimation) {
                onDismiss();
            }
        });
    };

    const onGesture = (event: any) => {
        if (event.nativeEvent.translationY > 0) {
            bottom.setValue(event.nativeEvent.translationY);
        }
    };

    const onGestureEnd = (event: any) => {
        if (event.nativeEvent.translationY > bottomSheetHeight * 0.2) {
            closeBottomSheet();
        } else {
            animationDuration(0, 200, false);
        }
    };

    return (
        <Modal transparent visible={show} onRequestClose={handleBackPress}>
            <GestureHandlerRootView style={GlobalStyles.flex}>
                <Pressable
                    onPressOut={() => closeBottomSheet()}
                    style={[GlobalStyles.flex, {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }]}
                />
                <PanGestureHandler
                    onGestureEvent={onGesture}
                    onEnded={onGestureEnd}
                >
                    <Animated.View
                        style={[
                            bottomSheetStyle.bottomSheetAnimation,
                            {
                                height: bottomSheetHeight,
                                transform: [{ translateY: bottom }],
                                marginTop: marginTop,
                            },
                        ]}
                    >
                        <View style={bottomSheetStyle.bottomSheetStyle}>
                            <View style={bottomSheetStyle.innerSheetStyle}>
                                <View style={bottomSheetStyle.miniLine} />
                            </View>
                            {headerComponent && headerComponent}
                            {childComponent}
                        </View>
                    </Animated.View>
                </PanGestureHandler>
            </GestureHandlerRootView>
        </Modal>
    );
}
