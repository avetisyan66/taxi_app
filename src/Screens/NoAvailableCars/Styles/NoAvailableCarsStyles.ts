import { StyleSheet } from "react-native";
import { Colors } from "../../../Global/Styles/AppColors";
import { FontTypeStyles } from "../../../Global/Styles/FontTypeStyles";

export const NoAvailableCarsStyles = StyleSheet.create({
    headerText: {
        ...FontTypeStyles.bold,
        color: Colors.darkBlue,
        fontSize: 16, 
        fontWeight: '400', 
        marginBottom: 16, 
        textAlign: 'center', 
        paddingHorizontal: 30
    }
})