import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    flex: {
        flex: 1
    },
    fullHeight: {
        height: '100%'
    },
    fullWidth: {
        width: '100%'
    },
    rowAlignCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowJustBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flexDirColumn: {
        flexDirection: 'column'
    },
    flexDirRow: {
        flexDirection: 'row'
    },
    halfWidth: {
        width: '48%'
    },
    alignItemsCnt: {
        alignItems: 'center'
    },
    alignItemsFlexEnd: {
        alignItems: 'flex-end'
    },
    justifAlignCnt: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});