import { StyleSheet } from "react-native";
import { Colors } from "./AppColors";
import { IS_PLATFORM_IOS } from "../Constants/constants";

export const FontTypeStyles = StyleSheet.create({
    bold: {
        fontFamily: 'Montserrat-Bold',
        color: Colors.darkBlue,
        fontSize: 18,
    },
    standard: {
        fontFamily: IS_PLATFORM_IOS ? 'Montserrat' : 'MontserratRegular',
        color: Colors.black,
        fontSize: 18,
    },
});