import { memo, useCallback, useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
//styles
import { CancelOrderStyles } from "../Styles/CancelOrderStyles";
import { BookingStyles } from "../../Booking/Styles/BookingStyles";

const SearchingBox = () => {
  const initialCircle = 8;
  const toValueCircle = 20;
  const initialDot = 6;
  const toValueDoc = 15;
  const circleSize = useRef(new Animated.Value(initialCircle)).current;
  const dot1Size = useRef(new Animated.Value(initialDot)).current;
  const dot2Size = useRef(new Animated.Value(initialDot)).current;
  const dot3Size = useRef(new Animated.Value(initialDot)).current;

  const animateCircle = useCallback(() => {
    return Animated.loop(
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
  }, [circleSize]);

  const animateDots = useCallback(() => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(dot1Size, {
          toValue: toValueDoc,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(dot1Size, {
          toValue: initialDot,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(dot2Size, {
          toValue: toValueDoc,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(dot2Size, {
          toValue: initialDot,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(dot3Size, {
          toValue: toValueDoc,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(dot3Size, {
          toValue: initialDot,
          duration: 500,
          useNativeDriver: false,
        }),
      ])
    );
  }, [dot1Size, dot2Size, dot3Size]);

  useEffect(() => {
    const circleAnimation = animateCircle();
    const dotsAnimation = animateDots();
    circleAnimation.start();
    dotsAnimation.start();

    // Cleanup function to stop the animations
    return () => {
      circleAnimation.stop();
      dotsAnimation.stop();
    };
  }, [animateCircle, animateDots]);

  return (
    <View style={[
      CancelOrderStyles.containerCancel,
      BookingStyles.shadowStyle
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
          Searching
        </Text>
        <View style={CancelOrderStyles.dotsWrapper}>
          <Animated.View
            style={[
              CancelOrderStyles.dotsBox,
              {
                width: dot1Size,
                height: dot1Size,
              },
            ]}
          />
          <Animated.View
            style={[
              CancelOrderStyles.dotsBox,
              {
                width: dot2Size,
                height: dot2Size,
              },
            ]}
          />
          <Animated.View
            style={[
              CancelOrderStyles.dotsBox,
              {
                width: dot3Size,
                height: dot3Size,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(SearchingBox);