import { StyleSheet } from "react-native";
//styles
import { Colors } from "../../../../../Global/Styles/AppColors";

export const SupportStyles = StyleSheet.create({
    orangeTop: {
        backgroundColor: Colors.orange,
        width: '100%',
        height: 200,
    },
    optionsBoxWrapper: {
        top: -50,
        width: '100%',
    },
    optionsBox: {
        paddingHorizontal: 21,
        paddingBottom: 12,
        width: '100%',
    },
    optionsLineBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        paddingHorizontal: 21
    },
    option: {
        flexDirection: 'column',
        width: '30%'
    },
    miniIcons: {
        height: 30,
        width: 30
    },
    optionText: {
        marginTop: 18,
        fontSize: 13
    },
    titleText: {
        fontSize: 18,
        marginTop: 30
    },
    ticketTextInput: {
        backgroundColor: Colors.invisibleGray,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: 15,
        paddingHorizontal: 15,
        height: 260,
        textAlignVertical: 'top',
        marginBottom: 150
    },
    yesNoText: {
        color: Colors.darkBlue,
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 8,
        marginBottom: 2
    },
    scrollStyle: {
        flexGrow: 1,
        paddingBottom: 20
    },
    descriptionText: {
        color: Colors.darkBlue,
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 23,
        marginTop: 5
    },
    headerText: {
        fontSize: 13,
        marginBottom: 10
    },
    cameraWrapper: {
        height: 140,
        backgroundColor: Colors.invisibleGray,
        marginTop: 35,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.lightGray,
    },
    inputWrapper: {
        height: 44,
        marginBottom: 0,
        width: '100%'
    },
    cameraIcon: {
        height: 40,
        width: 40,
    },
    dateAndTimeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerAndInputWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '48%'
    }
});