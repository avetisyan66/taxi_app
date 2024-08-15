import { memo } from "react";
import { Text, View } from "react-native";
//styles
import { SelectPaymentStyles } from "./Styles/SelectPaymentStyles";
import { BookingStyles } from "../Booking/Styles/BookingStyles";
//components
import PaymentBox from "./Components/PaymentBox";
import CustomButton from "../../Global/Components/CustomButton/CustomButton";
//mock data
import { mockDataVisaCards } from "./MockData/mockDataVisaCards";

interface ISelectPayment {
    selectedCard: string,
    handleCardSelect: Function,
    hidePaymentBtmBox: Function
};

const SelectPayment = ({ selectedCard, handleCardSelect, hidePaymentBtmBox }: ISelectPayment) => {

    return (
        <View style={SelectPaymentStyles.selectPaymentBtmBox}>
            <View style={[BookingStyles.flexDirColumn, {marginBottom: 15}]}>
                <Text style={SelectPaymentStyles.selectPaymentText}>
                    Select Payment
                </Text>
                <View>
                    {mockDataVisaCards.map((cardInfo) => {
                        return (
                            <PaymentBox
                                key={cardInfo.cardNumbers}
                                cardNumbers={cardInfo.cardNumbers}
                                logo={cardInfo.logo}
                                cardStatus={cardInfo.cardStatus}
                                isSelected={selectedCard === cardInfo.cardNumbers}
                                onCardSelect={handleCardSelect}
                            />
                        )
                    })}
                </View>
            </View>

            <CustomButton 
            title={'Done'}
            onClick={hidePaymentBtmBox}
            />
        </View>
    )
};

export default memo(SelectPayment);