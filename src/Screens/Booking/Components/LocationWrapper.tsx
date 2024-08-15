import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
//styles
import { BookingStyles } from "../Styles/BookingStyles";
import { Colors } from "../../../Global/Styles/AppColors";
//icons
import ArrowDown from "../../../Global/Icons/ArrowDown";
import PlusCircle from "../../../Global/Icons/PlusCircle";
//types
import { Address } from "../../StopsList/Interfaces/Address";

interface ILocation {
    currentLocation: string,
    handleOpenBottomSheet: Function,
    selectedAddresses: Address[],
    setIsAddLocationClicked: Function,
    hideInitialBox: Function,
};

const LocationWrapper = ({
    currentLocation,
    handleOpenBottomSheet,
    selectedAddresses,
    setIsAddLocationClicked,
    hideInitialBox,
}: ILocation) => {

    const handleWhereToLocationText = () => {
        if (selectedAddresses?.length === 0) {
            return 'Where To?';
        } else {
            if (selectedAddresses?.length === 1) {
                return selectedAddresses[0].name;
            } else {
                return selectedAddresses.map((locationInfo, index) => (
                    `${locationInfo.name}${index < selectedAddresses.length - 1 ? ' -> ' : ''}`
                )).join('');
            }
        }
    };

    const handleOpenBtmSheetOrBtmBox = () => {
        if (selectedAddresses?.length > 0) {
            if (selectedAddresses?.length > 1) {
                hideInitialBox();
            };
        } else {
            handleOpenBottomSheet();
        };
    };

    const handleWhereToBox = () => {
        return (
            <View>
                <TouchableOpacity
                    style={[BookingStyles.rowAlignCenter, { marginRight: 40 }]}
                    onPress={() => {
                        handleOpenBtmSheetOrBtmBox();
                    }}
                >
                    <Text
                        style={[BookingStyles.addressFirstLineText, {
                            color: selectedAddresses?.length > 0
                                ? Colors.darkBlue
                                : Colors.gray
                        }]}
                        numberOfLines={2}
                    >
                        {handleWhereToLocationText()}
                    </Text>
                </TouchableOpacity>
                <View style={BookingStyles.dividerWrapper}>
                    <View style={BookingStyles.dividerLine} />
                </View>
            </View>
        )
    };

    return (
        <View style={BookingStyles.addressChooseWrapper}>
            <View style={BookingStyles.iconsWrapper}>
                <View style={BookingStyles.orangeCircle} />
                <View style={BookingStyles.blackRow} />
                <ArrowDown />
            </View>
            <View style={BookingStyles.addressViewsWrapper}>
                <View style={[BookingStyles.initialAddressTouchView, { marginRight: 70 }]}>
                    <Text
                        style={BookingStyles.addressFirstLineText}
                        numberOfLines={2}
                    >
                        {currentLocation}
                    </Text>
                </View>
                {selectedAddresses?.length > 0
                    ? <View style={BookingStyles.plusBoxWrapper}>
                        <View style={[BookingStyles.dividerWrapper, { width: '80%' }]}>
                            <View style={[BookingStyles.dividerLine, BookingStyles.fullWidth]} />
                        </View>
                        <TouchableOpacity
                            style={BookingStyles.plusIconBox}
                            onPress={() => { setIsAddLocationClicked(true) }}
                        >
                            <PlusCircle />
                        </TouchableOpacity>
                    </View>
                    : <View style={BookingStyles.dividerWrapper}>
                        <View style={BookingStyles.dividerLine} />
                    </View>}
                {handleWhereToBox()}
            </View>
        </View>
    )
};

export default memo(LocationWrapper);