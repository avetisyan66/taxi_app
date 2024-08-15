import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
//styles
import { BookingStyles } from "../Booking/Styles/BookingStyles";
import { GlobalStyles } from "../../Global/Styles/GlobalStyles";

interface ICancelOrder {
    onClickCancel : Function
};

function CancelOrder ({onClickCancel}: ICancelOrder) {
    return (
        <View
            style={[
              BookingStyles.bottomSheetContainer,
              BookingStyles.addressSelectionWrapper,
              GlobalStyles.fullHeight ]}
          >
            <View style={BookingStyles.flexDirColumn}>
              <TouchableOpacity style={[
                BookingStyles.orangeButtonWrapper,
                BookingStyles.shadowStyle]}
                onPress={() => {
                  onClickCancel();
                }}
              >
                <Text style={BookingStyles.orangeButtonText}>
                  Cancel Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    )
};

export default memo(CancelOrder);