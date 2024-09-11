import { StyleSheet } from "react-native";
import { Colors } from "../../../Global/Styles/AppColors";
import { FontTypeStyles } from "../../../Global/Styles/FontTypeStyles";
//constants
import { IS_PLATFORM_ANDROID } from "../../../Global/Constants/constants";

export const DrawerStyles = StyleSheet.create({
    drawerContainer: {
        height: 250,
        backgroundColor: Colors.orange,
        flexDirection: 'column',
        paddingHorizontal: 50
    },
    firstPartWrapper: {
        marginTop: 75,
        flexDirection: 'column'
    },
    userProfileIcon: {
        width: 80,
        height: 80
    },
    editIconButton: {
        position: 'absolute',
        left: 55,
        bottom: 38,
    },
    editIcon: {
        width: 60,
        height: 60
    },
    userNameText: {
        ...FontTypeStyles.bold,
        color: Colors.white,
        marginTop: 15
    },
    emailText: {
        ...FontTypeStyles.standard,
        color: Colors.white,
        marginTop: 5,
        fontSize: 15
    },
    menuOptionsWrapper: {
        flexDirection: 'column',
        paddingHorizontal: 50
    },
    menuOptionText: {
        ...FontTypeStyles.bold,
        color: Colors.darkBlue,
        marginTop: 30,
        fontSize: 13
    },
    optionsNotificationCount: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        position: 'absolute',
        right: 0
    },
    optionsWithNotCountWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        alignItems: 'center'
    },
    signOutButton: {
        position: 'absolute',
        bottom: 60,
        left: 50
    },
    signOutText: {
        ...FontTypeStyles.standard,
        color: Colors.orange,
        marginTop: 5,
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 21,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    leftIconButton: {
        width: 35,
        height: 35,
        backgroundColor: Colors.white,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    historyBoxContainer: {
        width: '100%',
        backgroundColor: Colors.white,
        borderRadius: 15,
        paddingHorizontal: 21,
        paddingVertical: 14,
        marginBottom: 20
    },
    dateAndStatusWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateStatusText: {
        ...FontTypeStyles.bold,
        fontSize: 13
    },
    dividerLine: {
        height: 1,
        backgroundColor: Colors.lightGray,
        marginTop: 15,
        marginBottom: 20
    },
    timeAndIconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    timeText: {
        ...FontTypeStyles.standard,
        fontSize: 13,
        color: Colors.disabled,
        fontWeight: '700'
    },
    thinLineWrapper: {
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    thinLine: {
        height: 60,
        marginRight: 4,
        marginBottom: 0,
        width: 1,
        backgroundColor: 'black',
    },
    locationsWrapper: {
        marginLeft: 10,
        flex: 1,
        height: '100%'
    },
    locationText: {
        ...FontTypeStyles.standard,
        fontSize: 15
    },
    menuOptionContainer: {
        flex: 1,
        backgroundColor: Colors.white
    },
    historyBoxesWrapper: {
        paddingHorizontal: 21,
        paddingVertical: 10
    }
})