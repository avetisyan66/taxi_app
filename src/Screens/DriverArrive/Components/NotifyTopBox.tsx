import { memo, useCallback, useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
//styles
import { CancelOrderStyles } from "../../CancelOrder/Styles/CancelOrderStyles";
import { BookingStyles } from "../../Booking/Styles/BookingStyles";

function NotifyTopBox() {
    const initialCircle = 8;
    const toValueCircle = 20;
    const circleSize = useRef(new Animated.Value(initialCircle)).current;

    const animateCircle = useCallback(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(circleSize, {
                    toValue: toValueCircle,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(circleSize, {
                    toValue: initialCircle,
                    duration: 500,
                    useNativeDriver: false,
                }),
            ])
        );
        animation.start();
        return animation;
    }, [circleSize]);

    useEffect(() => {
        const animation = animateCircle();

        // Cleanup function to stop the animation
        return () => {
            animation.stop();
        };
    }, [animateCircle]);

    return (
        <View style={[
            CancelOrderStyles.containerCancel,
            BookingStyles.shadowStyle, { top: 90 }
        ]}>
            <View style={CancelOrderStyles.circleAnimationWrapper}>
                <Animated.View
                    style={[
                        CancelOrderStyles.orangeCircle,
                        {
                            width: circleSize,
                            height: circleSize,
                        },
                    ]}
                />
            </View>
            <View style={CancelOrderStyles.searchingAndDotsWrapper}>
                <Text style={CancelOrderStyles.searchingText}>
                    Your taxi has arrived
                </Text>
            </View>
        </View>
    )
};

export default memo(NotifyTopBox);
