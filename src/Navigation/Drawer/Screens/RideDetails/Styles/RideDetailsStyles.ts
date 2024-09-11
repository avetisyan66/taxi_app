import { StyleSheet } from "react-native";
//styles
import { FontTypeStyles } from "../../../../../Global/Styles/FontTypeStyles";
import { Colors } from "../../../../../Global/Styles/AppColors";
//constants
import { WINDOW_WIDTH } from "../../../../../Global/Constants/constants";

const RideDetailsStyles = StyleSheet.create({
    driverIcon: {
        width: 70,
        height: 70
    },
    detailsContainer: {
        paddingHorizontal: 0,
        flexGrow: 1,
        paddingBottom: 175
    },
    pathIcon: {
        width: '100%',
        height: 216,
        position: 'absolute'
    },
    historyBoxWrapper: {
        paddingHorizontal: 21,
        top: 175,
    },
    driverText: {
        ...FontTypeStyles.bold,
        marginBottom: 15,
        fontSize: 16,
        marginTop: 25
    },
    driverNameText: {
        marginBottom: 6,
        marginTop: 0
    },
    thinText: {
        ...FontTypeStyles.standard,
        marginBottom: 6,
        fontSize: 15
    },
    miniStarIcon: {
        width: 17.5,
        height: 17.5
    },
    rateText: {
        marginLeft: 2,
        fontSize: 15
    },
    paymentText: {
        marginBottom: 15,
        fontSize: 16,
        marginTop: 20
    },
    driverInfoBox: {
        height: 60,
        width: '100%',
        backgroundColor: Colors.invisibleGray,
        borderRadius: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20
    },
    masterCardIcon: {
        width: 25.6,
        height: 16.1,
    },
    cardNumbersText: {
        ...FontTypeStyles.standard,
        marginLeft: 2,
        fontSize: 15
    },
    miniTexts: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.darkBlue
    },
    buttonWrapper: {
        shadowColor: Colors.black,
        shadowOffset: { width: 10, height: 80 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 15,
    },
    boxHeightStyles: {
        height: 120,
        width: WINDOW_WIDTH,
        backgroundColor: Colors.white,
        marginTop: 60,
        alignSelf: 'center',
    },
    cstmButtonWrapper: {
        marginTop: 20,
        paddingHorizontal: 21
    }
});

export default RideDetailsStyles;