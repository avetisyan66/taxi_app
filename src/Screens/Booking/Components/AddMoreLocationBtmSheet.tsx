import { memo } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
//styles
import { BookingStyles } from "../Styles/BookingStyles";
import { Colors } from "../../../Global/Styles/AppColors";
//icons
import { CloseX } from "../../../Global/Icons/CloseX";
//data
import { mockDataSuggestedLocation } from "../MockData/mockDataSuggestedLocation";
//interfaces
import { Address } from "../../StopsList/Interfaces/Address";

interface IAddressSelect {
    whereToLocation: string,
    setWhereToLocation: Function,
    setShowAddressBottomSheet: Function,
    selectedAddresses: Address [],
    setSelectedAddresses: Function,
};

const AddMoreLocationBtmSheet = ({
    whereToLocation,
    setWhereToLocation,
    setShowAddressBottomSheet,
    selectedAddresses,
    setSelectedAddresses,
}: IAddressSelect) => {

    return (
        <View style={BookingStyles.innerBottomSheetPadding}>
            <View style={BookingStyles.shadowBox}>
                <View style={BookingStyles.addressChooseWrapper}>
                    <View
                        style={[
                            BookingStyles.addressViewsWrapper,
                            BookingStyles.bottomSheetInputWrapper, {height: 50}]}>
                        <View style={BookingStyles.bottomSheetFirstPartWrapper}>
                            <View
                                style={[
                                    BookingStyles.initialAddressTouchView,
                                    BookingStyles.inputWrapper, {width: '90%'}]}>
                                <TextInput style={BookingStyles.textInputInBottomSheet}
                                    defaultValue={whereToLocation}
                                    onChangeText={(value) => { setWhereToLocation(value) }}
                                    placeholder='Add Location'
                                    placeholderTextColor={Colors.gray}
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
                                    setSelectedAddresses([
                                        ...selectedAddresses,
                                        { name: location.name, city: location.city }
                                      ]);
                                    setShowAddressBottomSheet(false);
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
                <View style={[BookingStyles.bottomSpacing, {height: '10%'}]} />
            </View>
        </View>
    )
};


export default memo(AddMoreLocationBtmSheet);