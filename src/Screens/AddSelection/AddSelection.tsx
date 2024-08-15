import { memo } from "react";
import { Text, View } from "react-native";
//styles
import { BookingStyles } from "../Booking/Styles/BookingStyles";
//components
import CustomButton from "../../Global/Components/CustomButton/CustomButton";

interface IAddSelection {
    confirmSelection: Function,
    name?: string
};

function AddSelection({ confirmSelection, name }: IAddSelection) {

    return (
        <View
            style={[
                BookingStyles.bottomSheetContainer,
                BookingStyles.addressSelectionWrapper]}
        >
            <View style={BookingStyles.flexDirColumn}>
                <Text style={BookingStyles.addressText}>
                    Address
                </Text>
                <View
                    style={[
                        BookingStyles.dividerWrapper,
                        BookingStyles.fullWidth]}
                >
                    <View
                        style={[
                            BookingStyles.dividerLine,
                            BookingStyles.fullWidth]}
                    />
                </View>
                <Text
                    style={BookingStyles.selectedAddText}
                    numberOfLines={2}
                >
                    {name}
                </Text>
                <CustomButton
                    onClick={confirmSelection}
                    title={'Done'}
                />
            </View>
        </View>
    )
};

export default memo(AddSelection);