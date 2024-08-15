import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
//mock data
import { cash } from "../MockData/mockDataVisaCards";
//icons
import CheckMark from "../Assets/CheckMark";
//styles
import { BookingStyles } from "../../Booking/Styles/BookingStyles";
import { Colors } from "../../../Global/Styles/AppColors";
import { SelectPaymentStyles } from "../Styles/SelectPaymentStyles";

interface IPaymentBox {
  cardNumbers: string,
  logo: any,
  cardStatus: string,
  isSelected: boolean,
  onCardSelect: Function
};

const PaymentBox = ({ cardNumbers, logo, cardStatus, isSelected, onCardSelect }: IPaymentBox) => {
  return (
    <TouchableOpacity
      style={[
        BookingStyles.shadowStyle,
        SelectPaymentStyles.paymentCheckboxWrapper
      ]}
      onPress={() => onCardSelect(cardNumbers)}
    >
      <View style={BookingStyles.justifyDirRow}>
        <FastImage
          source={logo}
          style={{
            //cash IMAGE size has problem, fix with designer to avoid below logic
            width: cardStatus === cash ? 30 : 40,
            height: cardStatus === cash ? 30 : 30,
          }}
          resizeMode="contain"
        />
        <Text style={SelectPaymentStyles.cardNumberText}>
          {cardNumbers}
        </Text>
      </View>
      <View style={[SelectPaymentStyles.checkboxBox, {
        borderColor: isSelected ? Colors.orange : Colors.lightGray,
        backgroundColor: isSelected ? Colors.orange : Colors.white,
      }]}>
        {isSelected
          && <CheckMark />}
      </View>
    </TouchableOpacity>
  );
};

export default memo(PaymentBox);