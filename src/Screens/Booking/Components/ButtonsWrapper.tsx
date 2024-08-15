import { memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
//styles
import { BookingStyles } from "../Styles/BookingStyles";
//mock data
import { mockDataVisaCards } from "../../SelectPayment/MockData/mockDataVisaCards";
//styles
import { SelectPaymentStyles } from "../../SelectPayment/Styles/SelectPaymentStyles";

interface IButtonWrapper {
    visiblePaymentBtmBox: Function,
    selectedCard: string
};

const ButtonsWrapper = ({ visiblePaymentBtmBox, selectedCard }: IButtonWrapper) => {
    const selectedCardData = mockDataVisaCards.find(card => card.cardNumbers === selectedCard);

    return (
        <View style={BookingStyles.customizeWrapper}>
            <TouchableOpacity
                style={[
                    BookingStyles.rowAlignCenter,
                    SelectPaymentStyles.paymentMethodWrapper
                ]}
                onPress={() => visiblePaymentBtmBox()}>
                {selectedCardData && (
                    <>
                        <Image
                            style={[BookingStyles.masterCardIcon,
                            //cash IMAGE size has problem, fix with designer to avoid below logic
                            {
                                width: selectedCard === mockDataVisaCards[2].cardNumbers
                                    ? 30
                                    : 50,
                                marginLeft: selectedCard === mockDataVisaCards[2].cardNumbers ? 15 : 0
                            }]}
                            source={selectedCardData.logo}
                            resizeMode="contain"
                        />
                        <Text style={BookingStyles.customizeText}>
                            {selectedCardData.cardStatus}
                        </Text>
                    </>
                )}
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    BookingStyles.rowAlignCenter,
                    SelectPaymentStyles.paymentMethodWrapper
                ]}>
                <Image
                    style={[
                        BookingStyles.customizeIcon, {
                            marginLeft: 10
                        }]}
                    source={require('../Assets/customize.png')}
                />
                <Text style={BookingStyles.customizeText}>
                    Customize Order
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default memo(ButtonsWrapper);