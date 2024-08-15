import { StyleSheet } from "react-native";
import { IS_PLATFORM_ANDROID } from "../../../Global/Constants/constants";

export const MapStyles = StyleSheet.create({
    locationWrapper: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        top: (IS_PLATFORM_ANDROID ? '53%' : '52%'),
        left: (IS_PLATFORM_ANDROID ? '58%' : '59%'),
        transform: [{ translateX: -35 }, { translateY: -20 }],
        borderRadius: 100,
    },
    littleCircleView: {
        position: 'absolute',
        backgroundColor: '#f6d7c6',
        opacity: 0.6,
    },
    bigCircleView: {
        position: 'absolute',
        backgroundColor: '#f6d7c6',
        opacity: 0.3,
    },
    secondWrapper: {
        width: 70,
        height: 40,
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -35 }, { translateY: -20 }],
        zIndex: 9999,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});