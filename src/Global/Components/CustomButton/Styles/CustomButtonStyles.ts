import { StyleSheet } from "react-native";
import { FontTypeStyles } from "../../../Styles/FontTypeStyles";

export const CustomButtonStyles = StyleSheet.create({
    orangeButtonText: {
        ...FontTypeStyles.standard,
        fontWeight: '800',
        fontSize: 20,
    },
    orangeButtonWrapper: {
        height: 60,
        width: '100%',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
});