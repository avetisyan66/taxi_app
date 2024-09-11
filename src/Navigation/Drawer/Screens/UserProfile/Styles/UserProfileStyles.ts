import { StyleSheet } from "react-native";
//styles
import { FontTypeStyles } from "../../../../../Global/Styles/FontTypeStyles";
import { Colors } from "../../../../../Global/Styles/AppColors";
//constants
import { WINDOW_WIDTH } from "../../../../../Global/Constants/constants";

export const UserProfileStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingVertical: 10,
    },
    personalInfoWrapper: {
        borderWidth: .5,
        borderColor: Colors.lightGray,
        flexDirection: 'column',
        width: '100%',
        gap: 15,
        marginTop: 25
    },
    innerLineWrapper: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center'
    },
    icon: {
        width: 29,
        height: 30,
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.lightGray,
        top: 20
    },
    notificationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25
    },
    notificationText: {
        ...FontTypeStyles.bold,
        color: Colors.darkBlue,
        fontSize: 15,
        marginTop: 0,
        marginBottom: 5
    },
    checkbox: {
        height: 30,
        width: 55,
        borderRadius: 100,
        justifyContent: 'center',

        padding: 4,
    },
    checkboxInnerCircle: {
        backgroundColor: Colors.white,
        width: 22,
        height: 22,
        borderRadius: 100,
    },
    fixedButton: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 21,
        position: 'absolute',
        width: WINDOW_WIDTH,
        left: 0,
        bottom: 0,
        backgroundColor: Colors.white
    }
});