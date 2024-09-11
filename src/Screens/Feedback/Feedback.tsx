import { memo } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import FastImage from "react-native-fast-image";
//components
import CustomButton from "../../Global/Components/CustomButton/CustomButton";
//icons
import Star from "../../Global/Icons/Star";
import BigStar from "../../Global/Icons/BigStar";
import MasterCardSvg from "../../Global/Icons/MasterCarSvg";
import Menu from "../../Global/Icons/Menu";
//styles
import { GlobalStyles } from "../../Global/Styles/GlobalStyles";
import { BookingStyles } from "../Booking/Styles/BookingStyles";
import { Colors } from "../../Global/Styles/AppColors";
import { DriverArraveStyles } from "../DriverArrive/Styles/DriverArraveStyles";
import { CancelFullScreenStyles } from "../CancelFullScreen/Styles/CancelFullScreenStyles";
import { FeedbackStyles } from "./Styles/FeedbackStyles";
import { FontTypeStyles } from "../../Global/Styles/FontTypeStyles";

type Option = 'cleanInterior' | 'comfortableRide' | 'politeDriver';

interface ITipOption {
    cleanInterior: boolean,
    comfortableRide: boolean,
    politeDriver: boolean,
};

interface IFeedback {
    setSelectedOptions: Function,
    selectedOptions: ITipOption,
    drawerOpen: Function,
    handleStarPress: Function,
    starsAmount: number,
    setTipSelectedOption: Function,
    tipSelectedOption: null | number,
    hideFeedback: Function
};

function Feedback({
    setSelectedOptions,
    selectedOptions,
    drawerOpen,
    handleStarPress,
    starsAmount,
    setTipSelectedOption,
    tipSelectedOption,
    hideFeedback
}: IFeedback) {

    const tipOptions = [
        { id: 1, label: 'No Tip' },
        { id: 2, label: '2 USD' },
        { id: 3, label: '5 USD' },
        { id: 4, label: '7 USD' },
    ];

    const options = [
        { key: 'cleanInterior' as Option, label: 'Clean Interior' },
        { key: 'comfortableRide' as Option, label: 'Comfortable Ride' },
        { key: 'politeDriver' as Option, label: 'Polite Driver' },
    ];

    const toggleOption = (option: Option) => {
        setSelectedOptions((prev: ITipOption) => ({
            ...prev,
            [option]: !prev[option],
        }));
    };

    const getOptionBgStyle = (option: Option) => ({
        backgroundColor: selectedOptions[option] ? Colors.orange : Colors.lightGray,
    });
    const getOptionColorStyle = (option: Option) => ({
        color: selectedOptions[option] ? Colors.white : Colors.black,
    });

    return (
        <ScrollView
            style={[GlobalStyles.flex]}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={FeedbackStyles.scrollInner}>
                <TouchableOpacity
                    style={[
                        BookingStyles.shadowStyle,
                        BookingStyles.closeTopIconWrapper, {
                            left: 5
                        }]}
                    onPress={() => drawerOpen()}>
                    <Menu />
                </TouchableOpacity>
                <Text style={FeedbackStyles.arrivedText}>
                    You have arrived
                </Text>
                <View>
                    <Text style={FeedbackStyles.countText}>
                        25.99 USD
                    </Text>
                    <View style={FeedbackStyles.driverInfoWrapper}>
                        <View style={FeedbackStyles.leftPart}>
                            <Text style={FontTypeStyles.bold}>
                                Leonard Henderson
                            </Text>
                            <Text style={[FontTypeStyles.standard, {
                                fontSize: 12,
                            }]}>
                                Black Volkswagen Jetta
                            </Text>
                            <Text style={FeedbackStyles.carNumbersText}>
                                12XX345
                            </Text>
                            {/* </View>  */}
                        </View>
                        <View style={FeedbackStyles.imageWrapper}>
                            <FastImage
                                source={require('../DriverArrive/Assets/driver.png')}
                                style={DriverArraveStyles.profileImgSize}
                                resizeMode="contain"
                            />
                            <View style={FeedbackStyles.rattingWrapper}>
                                <Star />
                                <Text style={FeedbackStyles.ratingText}>
                                    4.8
                                </Text>
                            </View>
                        </View>
                    </View>

                    <Text style={FeedbackStyles.howWasText}>
                        How was your trip?
                    </Text>
                    <View style={FeedbackStyles.starsWrapper}>
                        {[1, 2, 3, 4, 5].map((star, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleStarPress(star)}>
                                <BigStar
                                    color={star <= starsAmount
                                        ? Colors.orange
                                        : Colors.lightGray
                                    } />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={FeedbackStyles.goodText}>
                        Good
                    </Text>
                    <TextInput
                        style={CancelFullScreenStyles.commentTextInput}
                        placeholder={'Add message...'}
                    />
                    <Text style={FeedbackStyles.additionalInfoText}>
                        Additional information
                    </Text>
                    <View style={FeedbackStyles.infoOptionWrapper}>
                        {options.map((option) => (
                            <TouchableOpacity
                                key={option.key}
                                onPress={() => toggleOption(option.key)}
                                style={[
                                    BookingStyles.shadowStyle,
                                    getOptionBgStyle(option.key),
                                    FeedbackStyles.optionTouchable,
                                ]}
                            >
                                <Text
                                    style={[
                                        FeedbackStyles.infoOptionText,
                                        getOptionColorStyle(option.key)
                                    ]}
                                >
                                    {option.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={FeedbackStyles.tipforDriverText}>
                        Tip for driver
                    </Text>
                    <View style={FeedbackStyles.tipOptionsWrapper}>
                        {tipOptions.map(option => (
                            <TouchableOpacity
                                key={option.id}
                                onPress={() => setTipSelectedOption(option.id)}
                                style={[BookingStyles.shadowStyle, {
                                    backgroundColor: tipSelectedOption === option.id
                                        ? Colors.orange
                                        : Colors.white,
                                    borderRadius: 6,
                                }]}
                            >
                                <Text style={[FeedbackStyles.tipOptionText, {
                                    color: tipSelectedOption === option.id
                                        ? Colors.white
                                        : Colors.black
                                }]}>
                                    {option.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TextInput
                        style={[
                            CancelFullScreenStyles.commentTextInput,
                            FeedbackStyles.secondTextInput
                        ]}
                        placeholder={'Enter your tip amount'}
                    />
                    <View style={FeedbackStyles.rideAmountWrapper}>
                        <MasterCardSvg />
                        <Text style={FeedbackStyles.amountText}>
                            25.99 USD
                        </Text>
                    </View>
                </View>
                <CustomButton
                    onClick={hideFeedback}
                    title={'Done'}
                />
            </View>
        </ScrollView>
    )
};

export default memo(Feedback);