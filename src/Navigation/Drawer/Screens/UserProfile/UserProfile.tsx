import { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
//components
import DrawerHeader from "../../Components/DrawerHeader";
import CustomButton from "../../../../Global/Components/CustomButton/CustomButton";
//styles
import { DrawerStyles } from "../../Styles/DrawerStyle";
import { FontTypeStyles } from "../../../../Global/Styles/FontTypeStyles";
import RideDetailsStyles from "../RideDetails/Styles/RideDetailsStyles";
import { Colors } from "../../../../Global/Styles/AppColors";
import { BookingStyles } from "../../../../Screens/Booking/Styles/BookingStyles";
import { UserProfileStyles } from "./Styles/UserProfileStyles";
import { GlobalStyles } from "../../../../Global/Styles/GlobalStyles";

function UserProfile(root: any) {
    const navigation = root.navigation;
    const [isChecked, setIsChecked] = useState(false);

    const handlePress = () => {
        setIsChecked(prevState => !prevState);
    };

    const handleNavigation = () => {
        navigation.navigate('BookingScreen');
    };

    return (
        <View style={DrawerStyles.menuOptionContainer}>
            <DrawerHeader
                onClick={handleNavigation}
            />
            <ScrollView
                contentContainerStyle={[
                    DrawerStyles.historyBoxesWrapper,
                ]}
                bounces={false}
            >
                <View style={UserProfileStyles.container}>
                    <View style={GlobalStyles.alignItemsCnt}>
                        <FastImage
                            source={require('../../../../Screens/DriverArrive/Assets/driver.png')}
                            style={RideDetailsStyles.driverIcon}
                            resizeMode="contain"
                        />

                        <Text style={[
                            DrawerStyles.userNameText,
                            { color: Colors.darkBlue }
                        ]}
                            numberOfLines={2}>
                            Carson
                        </Text>
                    </View>
                    <View style={[
                        DrawerStyles.historyBoxContainer,
                        BookingStyles.shadowStyle,
                        UserProfileStyles.personalInfoWrapper
                    ]}>
                        <View style={UserProfileStyles.innerLineWrapper}>
                            <FastImage
                                source={require('./Assets/phone.png')}
                                style={UserProfileStyles.icon}
                                resizeMode="contain"
                            />
                            <View style={GlobalStyles.flex}>
                                <Text style={[
                                    FontTypeStyles.standard,
                                    RideDetailsStyles.rateText,
                                    {
                                        marginLeft: 10,
                                    }
                                ]}>
                                    +1 926 483 32 52
                                </Text>
                                <View style={UserProfileStyles.divider} />
                            </View>
                        </View>
                        <View style={UserProfileStyles.innerLineWrapper}>
                            <FastImage
                                source={require('./Assets/mail.png')}
                                style={UserProfileStyles.icon}
                                resizeMode="contain"
                            />
                            <View style={GlobalStyles.flex}>
                                <Text style={[
                                    FontTypeStyles.standard,
                                    RideDetailsStyles.rateText,
                                    {
                                        marginLeft: 10,
                                    }
                                ]}>
                                    carson@mobility.com
                                </Text>
                                <View style={UserProfileStyles.divider} />
                            </View>
                        </View>
                        <View style={UserProfileStyles.innerLineWrapper}>
                            <FastImage
                                source={require('./Assets/facebook.png')}
                                style={UserProfileStyles.icon}
                                resizeMode="contain"
                            />
                            <View style={GlobalStyles.flex}>
                                <Text style={[
                                    FontTypeStyles.standard,
                                    RideDetailsStyles.rateText,
                                    {
                                        marginLeft: 10,
                                    }
                                ]}>
                                    @carsonmobility
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={UserProfileStyles.notificationWrapper}>
                        <View style={GlobalStyles.flexDirColumn}>
                            <Text
                                style={UserProfileStyles.notificationText}>
                                Notifications
                            </Text>
                            <Text style={DrawerStyles.timeText}>
                                For receiving driver messages
                            </Text>
                        </View>
                        <TouchableOpacity style={[UserProfileStyles.checkbox, {
                            backgroundColor: isChecked ? Colors.orange : Colors.lightGray,
                            alignItems: isChecked ? 'flex-end' : 'flex-start',
                        }]}
                            onPress={handlePress}
                        >
                            <View
                                style={UserProfileStyles.checkboxInnerCircle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={UserProfileStyles.fixedButton}>
                <CustomButton
                    onClick={() => {
                        // implement delete account logic
                    }}
                    title={'Delete account'}
                />
            </View>
        </View>
    )
};

export default UserProfile;
