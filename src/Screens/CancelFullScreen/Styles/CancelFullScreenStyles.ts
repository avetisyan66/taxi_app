import { StyleSheet } from "react-native";
import { Colors } from "../../../Global/Styles/AppColors";
import { FontTypeStyles } from "../../../Global/Styles/FontTypeStyles";

export const CancelFullScreenStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },
    reasonIntroText: {
        ...FontTypeStyles.standard,
        color: Colors.darkBlue,
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        paddingHorizontal: 10,
        marginBottom: 60,
        marginTop: 100
    },
    listWrapper: {
        justifyContent: 'flex-start',
        width: '100%'
    },
    listItemWrapper: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    checkMarkWrapper: {
        borderRadius: 5,
        marginRight: 16,
    },
    commentTextInput: {
        height: 40,
        width: '100%',
        borderWidth: .5,
        borderColor: Colors.lightGray,
        borderRadius: 18,
        paddingLeft: 15,
        backgroundColor: '#f7f8f9',
        marginTop: 5
    },
    fixxedButton: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        paddingHorizontal: 0
    }
});