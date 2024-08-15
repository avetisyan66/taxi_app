import { memo } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
//styles
import { BookingStyles } from "../Booking/Styles/BookingStyles";
import { Colors } from "../../Global/Styles/AppColors";
import { SelectPaymentStyles } from "../SelectPayment/Styles/SelectPaymentStyles";
import { GlobalStyles } from "../../Global/Styles/GlobalStyles";
import { CancelFullScreenStyles } from "./Styles/CancelFullScreenStyles";
//icons
import LeftArrow from "../../Global/Icons/LeftArrow";
//mock data
import { cancelReasons } from "./MockData/cancelReasons";
//components
import CheckMark from "../SelectPayment/Assets/CheckMark";
import CustomButton from "../../Global/Components/CustomButton/CustomButton";

interface ICancel {
  hideCancelFullScreen: Function,
  selectedReason: string,
  handleSelectReason: Function
};

function CancelFullScreen({ hideCancelFullScreen, selectedReason, handleSelectReason }: ICancel) {

  return (
    <View style={GlobalStyles.flex}>
      <TouchableOpacity
        style={[
          BookingStyles.shadowStyle,
          BookingStyles.closeTopIconWrapper, { left: 5 }]}
        onPress={() => hideCancelFullScreen()}>
        <LeftArrow />
      </TouchableOpacity>
      <View style={[
        GlobalStyles.flex,
        CancelFullScreenStyles.container]}
      >
        <Text style={CancelFullScreenStyles.reasonIntroText}>
          Please select the reason for cancellation:
        </Text>
        <View style={CancelFullScreenStyles.listWrapper}>
          {cancelReasons.map((cancelInfo) => {
            const isSelected = selectedReason === cancelInfo.reason;
            return (
              <TouchableOpacity
                key={cancelInfo.reason}
                onPress={() => handleSelectReason(cancelInfo.reason)}
                style={CancelFullScreenStyles.listItemWrapper}
              >
                <View style={[SelectPaymentStyles.checkboxBox,
                CancelFullScreenStyles.checkMarkWrapper, {
                  borderColor: isSelected ? Colors.orange : Colors.lightGray,
                  backgroundColor: isSelected ? Colors.orange : Colors.white,
                }]}>
                  {isSelected && <CheckMark />}
                </View>
                <Text>
                  {cancelInfo.reason}
                </Text>
              </TouchableOpacity>
            );
          })}
          <TextInput
            style={CancelFullScreenStyles.commentTextInput}
            placeholder={'Add comment...'}
          />
        </View>
        <View style={CancelFullScreenStyles.fixxedButton}>
          <CustomButton
            title={'Done'}
            onClick={hideCancelFullScreen}
          />
        </View>
      </View>
    </View>
  )
};

export default memo(CancelFullScreen);