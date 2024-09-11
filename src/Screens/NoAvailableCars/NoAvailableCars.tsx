import { memo } from "react";
import { Text, View } from "react-native";
//styles
import { BookingStyles } from "../Booking/Styles/BookingStyles";
import { GlobalStyles } from "../../Global/Styles/GlobalStyles";
import { NoAvailableCarsStyles } from "./Styles/NoAvailableCarsStyles";
import { Colors } from "../../Global/Styles/AppColors";
//components
import CustomButton from "../../Global/Components/CustomButton/CustomButton";

function NoAvailableCars() {

    return (
        <View
            style={[
                BookingStyles.bottomSheetContainer,
                BookingStyles.addressSelectionWrapper,
                GlobalStyles.fullHeight]}
        >
            <View style={BookingStyles.flexDirColumn}>
                <Text style={NoAvailableCarsStyles.headerText}>
                    Sorry, there are no available cars in this area.
                </Text>
                <View style={[
                    GlobalStyles.rowJustBetween,
                    GlobalStyles.fullWidth]}
                >
                    <View style={BookingStyles.halfWidth}>
                        <CustomButton
                            onClick={() => { /* implement */ }}
                            title={'Try again'}
                        />
                    </View>
                    <View style={GlobalStyles.halfWidth}>
                        <CustomButton
                            onClick={() => { /* implement */ }}
                            title={'Ok'}
                            bgColor={Colors.white}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
};

export default memo(NoAvailableCars);