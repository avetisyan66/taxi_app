import { StyleSheet } from "react-native";
import { Colors } from "../../../Global/Styles/AppColors";
import { FontTypeStyles } from "../../../Global/Styles/FontTypeStyles";

export const SelectPaymentStyles = StyleSheet.create({
    paymentMethodWrapper: {
        backgroundColor: Colors.invisibleGray,
        borderRadius: 16,
        width: '49%',
        height: 40
    },
    paymentCheckboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        justifyContent: 'space-between',
        paddingHorizontal: 22,
        paddingVertical: 18,
        borderRadius: 16,
        marginBottom: 10
    },
    cardNumberText: {
        ...FontTypeStyles.standard,
        color: Colors.darkBlue,
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 10
    },
    checkboxBox: {
        width: 18,
        height: 18,
        borderWidth: 1.5,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectPaymentBtmBox: {
        height: 410,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    selectPaymentText: {
        ...FontTypeStyles.standard,
        color: Colors.darkBlue,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    }
})