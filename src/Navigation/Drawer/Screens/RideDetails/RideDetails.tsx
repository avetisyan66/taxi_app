import { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
//components
import HistoryBox from "../RideHistory/Components/HistoryBox";
import CustomButton from "../../../../Global/Components/CustomButton/CustomButton";
import DrawerHeader from "../../Components/DrawerHeader";
import BottomSheet from "../../../../Global/Components/CustomBottomSheet/BottomSheet";
import Option from "./Components/Option";
//icons
import ArrowRight from "../../../../Global/Icons/ArrowRight";
//styles
import { GlobalStyles } from "../../../../Global/Styles/GlobalStyles";
import { DrawerStyles } from "../../Styles/DrawerStyle";
import { FontTypeStyles } from "../../../../Global/Styles/FontTypeStyles";
import { BookingStyles } from "../../../../Screens/Booking/Styles/BookingStyles";
import RideDetailsStyles from "./Styles/RideDetailsStyles";
//constants
import { IS_PLATFORM_ANDROID, WINDOW_HEIGHT } from "../../../../Global/Constants/constants";

function RideDetails(root: any) {
    const navigation = root.navigation;
    const [showIssueBtmSheet, setShowIssueBtmSheet] = useState(false);
    const optionHeight = 60;
    const numberOfOptions = 4;
    const textHeight = 60;
    const padding = 35 * 2;
    const totalHeight = (optionHeight * numberOfOptions) + textHeight + padding;
    const heightPercentage = (totalHeight / WINDOW_HEIGHT);

    const handleNavGoBack = () => {
        navigation.navigate('RideHistory');
    };

    const handleNavDriverDetails = () => {
        navigation.navigate('DriverDetails');
    };

    return (
        <View style={DrawerStyles.menuOptionContainer}>
            <DrawerHeader
                title={'Ride details'}
                onClick={handleNavGoBack}
            />
            <ScrollView
                contentContainerStyle={[
                    DrawerStyles.historyBoxesWrapper,
                    RideDetailsStyles.detailsContainer
                ]}
                bounces={false}
            >
                <FastImage
                    source={require('./Assets/pathExample.png')}
                    style={RideDetailsStyles.pathIcon}
                />
                <View style={RideDetailsStyles.historyBoxWrapper}>
                    <HistoryBox
                        rideDate={'8 June 2019, 18:39'}
                        rideStartTime={'11:24'}
                        rideEndTime={'11:38'}
                        rideStartLocation={'1, Thrale Street, London, SE19HW, UK'}
                        rideEndLocation={'Ealing Broadway Shopping Centre, London, W55JY, UK'}
                        clickable={false}
                    />
                    <Text style={RideDetailsStyles.driverText}>
                        Driver
                    </Text>
                    <TouchableOpacity style={[
                        BookingStyles.shadowStyle,
                        DrawerStyles.historyBoxContainer
                    ]}
                        onPress={handleNavDriverDetails}>
                        <View style={[
                            GlobalStyles.rowJustBetween,
                            GlobalStyles.alignItemsCnt]}>
                            <View style={{
                                flexDirection: 'row',
                                paddingVertical: 10
                            }}>
                                <FastImage
                                    source={require('../../../../Screens/DriverArrive/Assets/driver.png')}
                                    style={RideDetailsStyles.driverIcon}
                                    resizeMode="contain"
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={[
                                        RideDetailsStyles.driverText,
                                        RideDetailsStyles.driverNameText]}>
                                        Leonard
                                    </Text>
                                    <Text style={RideDetailsStyles.thinText}>
                                        Volkswagen Jetta
                                    </Text>
                                    <View style={[
                                        GlobalStyles.flexDirRow,
                                        GlobalStyles.alignItemsCnt
                                    ]}>
                                        <FastImage
                                            source={require('./Assets/miniStar.png')}
                                            style={RideDetailsStyles.miniStarIcon}
                                            resizeMode="contain"
                                        />
                                        <Text style={[
                                            FontTypeStyles.standard,
                                            RideDetailsStyles.rateText
                                        ]}>
                                            4.8
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <ArrowRight />
                        </View>
                    </TouchableOpacity>
                    <Text style={[
                        FontTypeStyles.bold,
                        RideDetailsStyles.paymentText
                    ]}>
                        Payment
                    </Text>
                    <View style={RideDetailsStyles.driverInfoBox}>
                        <View style={[
                            GlobalStyles.flexDirRow,
                            GlobalStyles.alignItemsCnt]}>
                            <FastImage
                                source={require('../../../../Screens/Booking/Assets/masterCard.png')}
                                style={RideDetailsStyles.masterCardIcon}
                                resizeMode="contain"
                            />
                            <Text style={RideDetailsStyles.cardNumbersText}>
                                **** 8295
                            </Text>
                        </View>
                        <View style={GlobalStyles.flexDirRow}>
                            <Text style={RideDetailsStyles.miniTexts}>
                                $
                            </Text>
                            <Text style={[RideDetailsStyles.miniTexts, { fontSize: 18 }]}>
                                7
                            </Text>
                            <Text style={RideDetailsStyles.miniTexts}>
                                63
                            </Text>
                        </View>
                    </View>
                    <View style={[
                        IS_PLATFORM_ANDROID
                            ? RideDetailsStyles.buttonWrapper
                            : BookingStyles.shadowStyle,
                        RideDetailsStyles.boxHeightStyles
                    ]}>
                        <View style={RideDetailsStyles.cstmButtonWrapper}>
                            <CustomButton
                                onClick={() => {
                                    setShowIssueBtmSheet(true);
                                }}
                                title={'Raise issue'}
                            />
                        </View>
                    </View>
                </View>
                {showIssueBtmSheet &&
                    <BottomSheet
                        show={showIssueBtmSheet}
                        heightPer={heightPercentage}
                        onDismiss={() => {
                            setShowIssueBtmSheet(false);
                        }}
                        childComponent={
                            <View style={{
                                padding: 21,
                            }}>
                                <Text
                                    style={[
                                        RideDetailsStyles.miniTexts, {
                                            fontSize: 18
                                        }]}>
                                    Choose an option
                                </Text>
                                <Option
                                    title={'I was involved in an accident'}
                                    onClick={() => setShowIssueBtmSheet(false)} />
                                <Option
                                    title={'I left an item'}
                                    onClick={() => setShowIssueBtmSheet(false)} />
                                <Option
                                    title={'I would like a refund'}
                                    onClick={() => setShowIssueBtmSheet(false)} />
                                <Option
                                    title={'I had a different issue'}
                                    onClick={() => setShowIssueBtmSheet(false)} />
                            </View>}
                    />
                }
            </ScrollView>
        </View>
    )
};

export default RideDetails;
