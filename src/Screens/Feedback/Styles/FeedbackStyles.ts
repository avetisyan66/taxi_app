import { StyleSheet } from "react-native";
import { Colors } from "../../../Global/Styles/AppColors";
import { FontTypeStyles } from "../../../Global/Styles/FontTypeStyles";

export const FeedbackStyles = StyleSheet.create({
    scrollInner: {
        paddingVertical: 20,
        paddingHorizontal: 6,
        flex: 1,
    },
    arrivedText: {
        ...FontTypeStyles.bold,
        textAlign: 'center',
        height: 30,
        marginTop: 20,
        marginBottom: 60,
    },
    countText: {
        ...FontTypeStyles.bold,
        textAlign: 'center',
        marginBottom: 20
    },
    driverInfoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40
    },
    leftPart: {
        flexDirection: 'column',
        gap: 3
    },
    carNumbersText: {
        ...FontTypeStyles.bold,
        fontSize: 14,
        backgroundColor: Colors.invisibleGray,
        alignSelf: 'flex-start',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 16,
        borderWidth: 0.5,
        borderColor: Colors.lightGray,
        marginTop: 3
    },
    imageWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 120
    },
    rattingWrapper: {
        flexDirection: 'row',
        backgroundColor: Colors.orange,
        alignSelf: 'flex-start',
        borderRadius: 14,
        paddingHorizontal: 6,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 54
    },
    ratingText: {
        ...FontTypeStyles.standard,
        color: Colors.white,
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 3
    },
    howWasText: {
        ...FontTypeStyles.standard,
        color: Colors.disabled,
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 5
    },
    starsWrapper: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center'
    },
    goodText: {
        ...FontTypeStyles.standard,
        color: Colors.darkBlue,
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 5
    },
    additionalInfoText: {
        ...FontTypeStyles.bold,
        color: Colors.darkBlue,
        fontSize: 14,
        marginBottom: 5,
        marginTop: 10,
    },
    infoOptionWrapper: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        marginTop: 5
    },
    optionTouchable: {
        borderRadius: 16,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoOptionText: {
        ...FontTypeStyles.standard,
        fontSize: 12,
        fontWeight: '700',
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 16,
    },
    tipforDriverText: {
        ...FontTypeStyles.bold,
        color: Colors.darkBlue,
        fontSize: 14,
        marginBottom: 5,
        marginTop: 20
    },
    tipOptionsWrapper: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 3
    },
    tipOptionText: {
        ...FontTypeStyles.bold,
        fontSize: 12,
        alignSelf: 'flex-start',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    secondTextInput: {
        borderRadius: 10,
        marginBottom: 25
    },
    rideAmountWrapper: {
        backgroundColor: Colors.invisibleGray,
        height: 60,
        borderRadius: 15,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    amountText: {
        ...FontTypeStyles.bold,
        color: Colors.darkBlue,
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 15
    }
});