import { StyleSheet } from "react-native";
import { Colors } from "../../../Styles/AppColors";

export const bottomSheetStyle = StyleSheet.create({
    miniLine: {
        height: 5,
        borderRadius: 10,
        width: '12%',
        backgroundColor: Colors.lightGray,
    },
    bottomSheetStyle: {
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden'
    },
    bottomSheetAnimation: {
        position: "absolute",
        width: '100%',
        backgroundColor: Colors.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        overflow: "hidden",
    },
    innerSheetStyle: {
        width: "100%",
        height: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
})
