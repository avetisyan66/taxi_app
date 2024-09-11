import { memo } from "react";
import { Text, View } from "react-native";
//styles
import { BookingStyles } from "../Booking/Styles/BookingStyles";
import { GlobalStyles } from "../../Global/Styles/GlobalStyles";
import { NoAvailableCarsStyles } from "../NoAvailableCars/Styles/NoAvailableCarsStyles";
import { Colors } from "../../Global/Styles/AppColors";
//components
import CustomButton from "../../Global/Components/CustomButton/CustomButton";

function Confirm({
    hideConfirmShowReason,
    hideConfirmContinueCancel,
    title,
    option1,
    option2,
}: {
    hideConfirmShowReason: Function,
    hideConfirmContinueCancel: Function,
    title: string,
    option1: string,
    option2: string,
}) {
    return (
        <View
            style={[
                BookingStyles.bottomSheetContainer,
                BookingStyles.addressSelectionWrapper,
                GlobalStyles.fullHeight]}
        >
            <View style={BookingStyles.flexDirColumn}>
                <Text style={NoAvailableCarsStyles.headerText}>
                    {title}
                </Text>
                <View style={[
                    GlobalStyles.rowJustBetween,
                    GlobalStyles.fullWidth]}
                >
                    <View style={BookingStyles.halfWidth}>
                        <CustomButton
                            onClick={hideConfirmContinueCancel}
                            title={option1}
                        />
                    </View>
                    <View style={GlobalStyles.halfWidth}>
                        <CustomButton
                            onClick={hideConfirmShowReason}
                            title={option2}
                            bgColor={Colors.white}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
};

export default memo(Confirm);