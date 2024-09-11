import { useState } from "react";
import FastImage from "react-native-fast-image";
import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
//components
import DrawerHeader from "../../Components/DrawerHeader";
import CustomButton from "../../../../Global/Components/CustomButton/CustomButton";
import CheckMark from "../../../../Screens/SelectPayment/Assets/CheckMark";
//styles
import { DrawerStyles } from "../../Styles/DrawerStyle";
import { UserProfileStyles } from "../UserProfile/Styles/UserProfileStyles";
import { SupportStyles } from "../Support/Styles/SupportStyles";
import { Colors } from "../../../../Global/Styles/AppColors";
import { SelectPaymentStyles } from "../../../../Screens/SelectPayment/Styles/SelectPaymentStyles";
import { GlobalStyles } from "../../../../Global/Styles/GlobalStyles";

function Accident(root: any) {
    const navigation = root.navigation;
    const YES = 'yes';
    const NO = 'no';
    const [selectedOption, setSelectedOption] = useState(YES);

    const handleNavigation = () => {
        navigation.navigate('Tickets');
    };

    return (
        <View style={DrawerStyles.menuOptionContainer}>
            <DrawerHeader
                title={'Tell more'}
                onClick={handleNavigation}
            />
            <ScrollView
                contentContainerStyle={[
                    DrawerStyles.historyBoxesWrapper,
                    SupportStyles.scrollStyle
                ]}
                bounces={false}
            >
                <Text
                    style={[
                        UserProfileStyles.notificationText,
                        SupportStyles.titleText, {
                            marginTop: 20
                        }
                    ]}>
                    I was involved in an accident
                </Text>
                <Text
                    style={SupportStyles.descriptionText}
                >
                    If you've lost an item you will need to send us an message immediately, please remembering to provide us with as many details as possible about your lost item and the ride you took. If we find it we’ll connect you with the driver directly to get it back.
                </Text>
                <View
                    style={SupportStyles.dateAndTimeWrapper}>
                    <View style={SupportStyles.headerAndInputWrapper}>
                        <Text
                            style={[
                                UserProfileStyles.notificationText,
                                SupportStyles.titleText, {
                                    fontSize: 13,
                                    marginBottom: 10
                                }
                            ]}>
                            DATE
                        </Text>
                        <TextInput
                            style={[SupportStyles.ticketTextInput, {
                                height: 44,
                                marginBottom: 0
                            }]}
                        />
                    </View>
                    <View style={SupportStyles.headerAndInputWrapper}>
                        <Text
                            style={[
                                UserProfileStyles.notificationText,
                                SupportStyles.titleText, {
                                    fontSize: 13,
                                    marginBottom: 10
                                }
                            ]}>
                            TIME
                        </Text>
                        <TextInput
                            style={[SupportStyles.ticketTextInput, {
                                height: 44,
                                marginBottom: 0
                            }]}
                        />
                    </View>
                </View>
                <Text
                    style={[
                        UserProfileStyles.notificationText,
                        SupportStyles.titleText,
                        SupportStyles.headerText,
                        {
                            marginTop: 20
                        }
                    ]}>
                    PLACE
                </Text>
                <TextInput
                    style={[SupportStyles.ticketTextInput,
                    SupportStyles.inputWrapper
                    ]}
                />
                <Text
                    style={[
                        UserProfileStyles.notificationText,
                        SupportStyles.titleText, SupportStyles.headerText,
                        {
                            marginTop: 40
                        }
                    ]}>
                    HAVE YOU BEEN HURT?
                </Text>
                <View style={[GlobalStyles.flexDirRow, {
                    gap: 140
                }]}>
                    <TouchableOpacity
                        onPress={() => setSelectedOption(YES)}
                        style={GlobalStyles.rowAlignCenter}
                    >
                        <View style={[SelectPaymentStyles.checkboxBox, {
                            borderColor: selectedOption === YES ? Colors.orange : Colors.lightGray,
                            backgroundColor: selectedOption === YES ? Colors.orange : Colors.white,
                        }]}>
                            {selectedOption === YES && <CheckMark />}
                        </View>
                        <Text style={SupportStyles.yesNoText}>
                            Yes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSelectedOption(NO)}
                        style={GlobalStyles.rowAlignCenter}
                    >
                        <View style={[SelectPaymentStyles.checkboxBox, {
                            borderColor: selectedOption === NO ? Colors.orange : Colors.lightGray,
                            backgroundColor: selectedOption === NO ? Colors.orange : Colors.white,
                        }]}>
                            {selectedOption === NO && <CheckMark />}
                        </View>
                        <Text style={SupportStyles.yesNoText}>
                            No
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={[
                        UserProfileStyles.notificationText,
                        SupportStyles.titleText,
                        SupportStyles.headerText, {
                            marginTop: 20,
                        }
                    ]}>
                    HAVE THE ACCIDENT OCCURRED
                </Text>
                <TextInput
                    style={[SupportStyles.ticketTextInput,
                    SupportStyles.inputWrapper]}
                />
                <TouchableOpacity style={SupportStyles.cameraWrapper}>
                    <FastImage
                        source={require('./Assets/camera.png')}
                        style={SupportStyles.cameraIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={{ height: 150 }} />
            </ScrollView>
            <View style={[UserProfileStyles.fixedButton]}>
                <CustomButton
                    onClick={() => {
                        navigation.navigate('BookingScreen')
                    }}
                    title={'Submit'}
                />
            </View>
        </View>
    )
};

export default Accident;
