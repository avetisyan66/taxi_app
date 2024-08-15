import { StyleSheet } from "react-native";
//styles
import { Colors } from "../../../Global/Styles/AppColors";
import { FontTypeStyles } from "../../../Global/Styles/FontTypeStyles";
//constants
import { IS_PLATFORM_ANDROID } from "../../../Global/Constants/constants";

export const BookingStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    whiteClosedWrapper: {
        height: 370,
        backgroundColor: Colors.white,
        padding: 16
    },
    bottomSheetContainer: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    addressChooseWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    iconsWrapper: {
        alignItems: 'center',
        width: 20,
        height: 80
    },
    orangeCircle: {
        backgroundColor: Colors.orange,
        height: 10,
        width: 10,
        borderRadius: 100,
        marginVertical: 4
    },
    blackRow: {
        height: 26,
        width: 1,
        backgroundColor: 'black',
        marginBottom: 4
    },
    addressViewsWrapper: {
        justifyContent: 'center',
        height: 100,
        width: '100%',
        paddingLeft: 10,
    },
    initialAddressTouchView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    addressFirstLineText: {
        ...FontTypeStyles.standard,
        color: Colors.darkBlue,
        fontSize: 15,
    },
    dividerWrapper: {
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 10
    },
    dividerLine: {
        backgroundColor: Colors.lightGray,
        height: 1,
        width: '90%',
        borderRadius: 16
    },
    rowAlignCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    secondDividerWrapper: {
        backgroundColor: Colors.lightGray,
        height: 1,
        width: '90%',
        borderRadius: 16
    },
    carSelectBoxWrapper: {
        backgroundColor: Colors.iron,
        height: 100,
        width: 100,
        borderRadius: 12,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1
    },
    carImage: {
        width: 90,
        height: 28
    },
    carStatusText: {
        ...FontTypeStyles.standard,
        color: Colors.darkBlue,
        fontSize: 14,
        fontWeight: '800'
    },
    roadPriceText: {
        ...FontTypeStyles.standard,
        color: Colors.darkBlue,
        fontSize: 16,
        fontWeight: '500'
    },
    roadDurationWrapper: {
        backgroundColor: Colors.darkGray,
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    roadDurationText: {
        ...FontTypeStyles.standard,
        color: Colors.white,
        fontSize: 13,
        fontWeight: '600'
    },
    fullHeightWidth: {
        width: '100%',
        height: '100%'
    },
    horizontalSelectionWrapper: {
        width: '100%',
        height: 100
    },
    selectionView: {
        paddingRight: 10
    },
    customizeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    masterCardIcon: {
        width: 36,
        height: 33,
        marginRight: 15
    },
    customizeText: {
        ...FontTypeStyles.standard,
        fontSize: 13,
        color: Colors.black,
    },
    orangeButtonText: {
        ...FontTypeStyles.standard,
        color: Colors.white,
        fontWeight: '800',
        fontSize: 20,
    },
    orangeButtonWrapper: {
        height: 60,
        width: '100%',
        backgroundColor: Colors.orange,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    customizeIcon: {
        width: 23,
        height: 25,
        marginRight: 15
    },
    customBottomMore: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 99
    },
    userLocImg: {
        width: 40,
        height: 40
    },
    mapAndBottomWrapper: {
        height: '100%',
        zIndex: 2
    },
    imageAndNameWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    locationIcon: {
        height: 35,
        width: 35
    },
    locationNameText: {
        ...FontTypeStyles.standard,
        color: Colors.darkBlue,
        fontSize: 16
    },
    cityText: {
        ...FontTypeStyles.standard,
        color: Colors.disabled,
        fontSize: 13
    },
    dividerMore: {
        alignItems: 'flex-end',
        paddingTop: 15,
        paddingBottom: 10
    },
    bottomSpacing: {
        height: '28%',
        width: '100%'
    },
    scrollInBottomSheet: {
        marginTop: 35,
        marginBottom: IS_PLATFORM_ANDROID ? 20 : 0
    },
    scrollWrapper: {
        flexDirection: 'column',
        height: '95%'
    },
    mapText: {
        ...FontTypeStyles.standard,
        color: Colors.darkBlue,
        fontSize: 16
    },
    customdivider: {
        height: 18,
        width: 1,
        backgroundColor: Colors.darkGray
    },
    inputAndCloseWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8
    },
    closeBigTouch: {
        paddingHorizontal: 7
    },
    textInputInBottomSheet: {
        color: Colors.darkBlue,
        fontSize: 15,
        fontFamily: "Montserrat",
        width: '100%',
        alignItems: 'center',
        paddingVertical: 4
    },
    inputWrapper: {
        width: '75%'
    },
    bottomSheetFirstPartWrapper: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center'
    },
    bottomSheetInputWrapper: {
        width: '92%'
    },
    iconsWrapperMore: {
        width: '10%',
        justifyContent: 'center'
    },
    blackRowHeight: {
        height: 30
    },
    shadowStyle: {
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    shadowBox: {
        padding: 5,
        borderRadius: 16,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    innerBottomSheetPadding: {
        padding: 16
    },
    dividerBottomMore: {
        width: '87%'
    },
    fixedCenterLocation: {
        position: 'absolute',
        top: 100,
        left: '50%',
        marginLeft: -20,
        marginTop: -20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 4
    },
    duartionWrapper: {
        paddingVertical: 3,
        paddingHorizontal: 10,
        marginBottom: 5,
        backgroundColor: Colors.orange
    },
    addressText: {
        ...FontTypeStyles.standard,
        color: Colors.darkBlue,
        fontSize: 20,
        fontWeight: '700'
    },
    addressSelectionWrapper: {
        height: 200,
        paddingVertical: 5,
        paddingHorizontal: 7,
        width: '100%',
    },
    flexDirColumn: {
        flexDirection: 'column'
    },
    fullWidth: {
        width: '100%'
    },
    selectedAddText: {
        ...FontTypeStyles.standard,
        color: Colors.darkBlue,
        fontSize: 16,
        marginBottom: 12
    },
    closeTopIconWrapper: {
        width: 40,
        height: 40,
        backgroundColor: Colors.white,
        position: 'absolute',
        top: IS_PLATFORM_ANDROID ? 35 : 50,
        zIndex: 9999,
        left: 20,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusBoxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    plusIconBox: {
        width: '10%',
        alignItems: 'flex-end'
    },
    iterationStopsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        width: '100%'
    },
    numberAndLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        width: '60%'
    },
    numberWrapper: {
        width: 25,
        height: 25,
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: Colors.darkBlue,
        alignItems: 'center'
    },
    numberText: {
        ...FontTypeStyles.standard,
        color: Colors.white,
        fontSize: 15,
        fontWeight: '700'
    },
    crntLocText: {
        ...FontTypeStyles.standard,
        fontSize: 16,
        color: Colors.darkBlue
    },
    closeAndMenuWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    closeButton: {
        width: 24,
        height: 24,
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: Colors.orange,
        alignItems: 'center'
    },
    justifyDirRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    halfWidth: {
        width: '48%'
    }
});