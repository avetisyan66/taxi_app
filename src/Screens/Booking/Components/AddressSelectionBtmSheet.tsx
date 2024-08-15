import { memo } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
//styles
import { BookingStyles } from "../Styles/BookingStyles";
import { Colors } from "../../../Global/Styles/AppColors";
//icons
import ArrowDown from "../../../Global/Icons/ArrowDown";
import { CloseX } from "../../../Global/Icons/CloseX";
//data
import { mockDataSuggestedLocation } from "../MockData/mockDataSuggestedLocation";
//interfaces
import { Address } from "../../StopsList/Interfaces/Address";

interface IAddressSelect {
    currentLocation: string,
    setCurrentLocation: Function,
    whereToLocation: string,
    setWhereToLocation: Function,
    chooseInitialLocation: (location: Address) => void
};

const AddressSelectionBtmSheet = ({
    currentLocation,
    setCurrentLocation,
    whereToLocation,
    setWhereToLocation,
    chooseInitialLocation,
}: IAddressSelect) => {

    return (
        <View style={BookingStyles.innerBottomSheetPadding}>
            <View style={BookingStyles.shadowBox}>
                <View style={BookingStyles.addressChooseWrapper}>
                    <View
                        style={[
                            BookingStyles.iconsWrapper,
                            BookingStyles.iconsWrapperMore]}>
                        <View style={BookingStyles.orangeCircle} />
                        <View
                            style={[
                                BookingStyles.blackRow,
                                BookingStyles.blackRowHeight]} />
                        <ArrowDown />
                    </View>
                    <View
                        style={[
                            BookingStyles.addressViewsWrapper,
                            BookingStyles.bottomSheetInputWrapper]}>
                        <View style={BookingStyles.bottomSheetFirstPartWrapper}>
                            <View
                                style={[
                                    BookingStyles.initialAddressTouchView,
                                    BookingStyles.inputWrapper]}>
                                <TextInput
                                    style={BookingStyles.textInputInBottomSheet}
                                    defaultValue={currentLocation}
                                    onChangeText={(value) => { setCurrentLocation(value) }}
                                    placeholder='Current Location'
                                />
                            </View>
                            <View style={BookingStyles.inputAndCloseWrapper}
                            >
                                <TouchableOpacity
                                    style={BookingStyles.closeBigTouch}
                                    onPress={() => setCurrentLocation('')}
                                >
                                    <CloseX
                                        width={13}
                                        height={13}
                                    />
                                </TouchableOpacity>
                                <View style={BookingStyles.customdivider} />
                                <TouchableOpacity>
                                    <Text style={BookingStyles.mapText}>
                                        Map
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={BookingStyles.dividerWrapper}>
                            <View style={BookingStyles.dividerLine} />
                        </View>
                        <View style={BookingStyles.bottomSheetFirstPartWrapper}>
                            <View
                                style={[
                                    BookingStyles.initialAddressTouchView,
                                    BookingStyles.inputWrapper]}>
                                <TextInput style={BookingStyles.textInputInBottomSheet}
                                    defaultValue={whereToLocation}
                                    onChangeText={(value) => { setWhereToLocation(value) }}
                                    placeholder='Current Location'
                                    placeholderTextColor={Colors.lightGray}
                                />
                            </View>
                            <View style={BookingStyles.inputAndCloseWrapper}
                            >
                                <TouchableOpacity
                                    style={BookingStyles.closeBigTouch}
                                    onPress={() => setWhereToLocation('')}
                                >
                                    <CloseX
                                        width={13}
                                        height={13}
                                    />
                                </TouchableOpacity>
                                <View style={BookingStyles.customdivider} />
                                <TouchableOpacity>
                                    <Text style={BookingStyles.mapText}>
                                        Map
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={BookingStyles.scrollWrapper}>
                <ScrollView
                    style={BookingStyles.scrollInBottomSheet}
                >
                    {mockDataSuggestedLocation.map((location, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    chooseInitialLocation(location);
                                }}
                            >
                                <View style={BookingStyles.imageAndNameWrapper}>
                                    <Image
                                        style={BookingStyles.locationIcon}
                                        source={require('../Assets/location.png')}
                                    />
                                    <View>
                                        <Text style={BookingStyles.locationNameText}>
                                            {location.name}
                                        </Text>
                                        <Text style={BookingStyles.cityText}>
                                            {location.city}
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={[
                                        BookingStyles.dividerWrapper,
                                        BookingStyles.dividerMore]}
                                >
                                    <View
                                        style={[
                                            BookingStyles.dividerLine,
                                            BookingStyles.dividerBottomMore]}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                <View style={BookingStyles.bottomSpacing} />
            </View>
        </View>
    )
};


export default memo(AddressSelectionBtmSheet);