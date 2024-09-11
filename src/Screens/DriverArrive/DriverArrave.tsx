import { memo } from "react"
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
//styles
import { SelectPaymentStyles } from "../SelectPayment/Styles/SelectPaymentStyles";
import { BookingStyles } from "../Booking/Styles/BookingStyles";
import { Colors } from "../../Global/Styles/AppColors";
import { GlobalStyles } from "../../Global/Styles/GlobalStyles";
import { DriverArraveStyles } from "./Styles/DriverArraveStyles";
//components
import CustomButton from "../../Global/Components/CustomButton/CustomButton";

interface IDriveArrave {
    hideArrivingShowCancelReason: Function,
    showDriverArriving: boolean,
    showDriverArrived: boolean
};

function DriverArrave({
    hideArrivingShowCancelReason,
    showDriverArriving,
    showDriverArrived
}: IDriveArrave) {

    const handleArriveStepsViews = () => {
        if (showDriverArriving) {
            return (
                <View style={[
                    GlobalStyles.rowJustBetween,
                    GlobalStyles.fullWidth]}
                >
                    <View style={BookingStyles.halfWidth}>
                        <CustomButton
                            onClick={hideArrivingShowCancelReason}
                            title={'Cancel Order'}
                            bgColor={Colors.white}
                        />
                    </View>
                    <View style={GlobalStyles.halfWidth}>
                        <CustomButton
                            onClick={() => { /* implement */ }}
                            title={'Contact'}
                        />
                    </View>
                </View>
            )
        } else if (showDriverArrived) {
            return (
                <View style={BookingStyles.fullWidth}>
                    <CustomButton
                        onClick={() => { /* implement */ }}
                        title={'Contact Driver'}
                    />
                </View>)
        } else {
            return (
                <View style={GlobalStyles.flexDirColumn}>
                    <View style={[
                        GlobalStyles.rowJustBetween,
                        GlobalStyles.alignItemsCnt
                    ]}>
                        <Text style={[
                            SelectPaymentStyles.selectPaymentText,
                            DriverArraveStyles.infoText
                        ]}>
                            Price
                        </Text>
                        <Text style={[SelectPaymentStyles.selectPaymentText, {
                            fontSize: 16
                        }]}>
                            25.99 USD
                        </Text>
                    </View>
                    <View style={[
                        GlobalStyles.rowJustBetween,
                        GlobalStyles.alignItemsCnt
                    ]}>
                        <Text style={[
                            SelectPaymentStyles.selectPaymentText,
                            DriverArraveStyles.infoText
                        ]}>
                            Distance
                        </Text>
                        <Text style={[SelectPaymentStyles.selectPaymentText, {
                            fontSize: 16
                        }]}>
                            4.7 km
                        </Text>
                    </View>
                    <View style={[
                        GlobalStyles.rowJustBetween,
                        GlobalStyles.alignItemsCnt
                    ]}>
                        <Text style={[
                            SelectPaymentStyles.selectPaymentText,
                            DriverArraveStyles.infoText
                        ]}>
                            Time
                        </Text>
                        <Text style={[SelectPaymentStyles.selectPaymentText, {
                            fontSize: 16
                        }]}>
                            00:05:26
                        </Text>
                    </View>
                </View>
            )
        }
    };

    return (
        <View>
            <View style={DriverArraveStyles.driverProfileImgWrapper}>
                <FastImage
                    source={require('./Assets/driver.png')}
                    style={DriverArraveStyles.profileImgSize}
                    resizeMode="contain"
                />
            </View>
            <View style={[
                SelectPaymentStyles.selectPaymentBtmBox,
                GlobalStyles.fullWidth, {
                    marginTop: 20
                }]}>
                <View style={[BookingStyles.flexDirColumn, { marginBottom: 15 }]}>
                    <View style={[
                        GlobalStyles.rowJustBetween,
                        GlobalStyles.alignItemsCnt
                    ]}>
                        <Text style={[
                            SelectPaymentStyles.selectPaymentText, {
                                fontSize: 16
                            }]}>
                            Leonard Henderson
                        </Text>
                        <Text style={[
                            SelectPaymentStyles.selectPaymentText,
                            DriverArraveStyles.carNumberText
                        ]}>
                            12XX345
                        </Text>
                    </View>
                    <View style={[
                        GlobalStyles.fullWidth,
                        GlobalStyles.alignItemsFlexEnd]}>
                        <View style={GlobalStyles.flexDirRow}>
                            <View style={DriverArraveStyles.circleWrapper}>
                                <View style={DriverArraveStyles.innerCircle} />
                            </View>
                            <Text style={[DriverArraveStyles.carNameText]}>
                                Black Volkswagen Jetta
                            </Text>
                        </View>
                    </View>
                    <View>
                    </View>
                </View>
                {handleArriveStepsViews()}
            </View>
        </View>
    )
};

export default memo(DriverArrave);