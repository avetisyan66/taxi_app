import { StyleSheet } from "react-native";
import { Colors } from "../../../Global/Styles/AppColors";
import { FontTypeStyles } from "../../../Global/Styles/FontTypeStyles";

export const CancelOrderStyles = StyleSheet.create({
    containerCancel: {
        backgroundColor: Colors.darkBlue,
        position: 'absolute',
        zIndex: 9999,
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        top: 100,
        width: '90%',
        left: '5%',
        height: 50,
    },
    circleAnimationWrapper: {
        width: 40,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    orangeCircle: {
        backgroundColor: Colors.orange,
        borderRadius: 100,
        marginLeft: 21,
    },
    searchingAndDotsWrapper: {
        width: '100%',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center'
    },
    searchingText: {
        ...FontTypeStyles.standard,
        color: Colors.white,
        fontSize: 15,
        fontWeight: '600',
    },
    dotsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 5
    },
    dotsBox: {
        backgroundColor: 'white',
        borderRadius: 100,
    }
});