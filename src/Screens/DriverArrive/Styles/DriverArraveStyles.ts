import { StyleSheet } from "react-native";
import { Colors } from "../../../Global/Styles/AppColors";
import { FontTypeStyles } from "../../../Global/Styles/FontTypeStyles";

export const DriverArraveStyles = StyleSheet.create({
    infoText: {
        ...FontTypeStyles.standard,
        fontSize: 16,
        fontWeight: '600'
    },
    driverProfileImgWrapper: {
        width: 116,
        height: 116,
        backgroundColor: Colors.white,
        position: 'absolute',
        left: -16,
        top: -80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImgSize: {
        width: 70,
        height: 70,
    },
    carNumberText: {
        ...FontTypeStyles.standard,
        fontSize: 18,
        backgroundColor: Colors.invisibleGray,
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    circleWrapper: {
        width: 24,
        height: 24,
        backgroundColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginRight: 5
    },
    innerCircle: {
        width: 18,
        height: 18,
        backgroundColor: Colors.black,
        borderRadius: 100
    },
    carNameText: {
        ...FontTypeStyles.standard,
        fontSize: 16,
        fontWeight: '400',
        color: Colors.darkBlue
    }
})