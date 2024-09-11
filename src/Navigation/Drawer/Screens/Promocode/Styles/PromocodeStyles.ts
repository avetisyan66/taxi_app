import { StyleSheet } from "react-native";
//styles
import { Colors } from "../../../../../Global/Styles/AppColors";

export const PromocodeStyles = StyleSheet.create({
    grayCircle: {
        backgroundColor: Colors.invisibleGray, width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: .5,
        borderColor: Colors.lightGray
    },
    textInputStyle: {
        width: '90%',
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 1,
        textAlign: 'center',
        fontSize: 30,
        color: Colors.orange,
        fontWeight: '900'
    }
});