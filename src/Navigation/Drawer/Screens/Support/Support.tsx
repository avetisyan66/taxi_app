import { View, ScrollView, Text } from "react-native";
import FastImage from "react-native-fast-image";
//components
import DrawerHeader from "../../Components/DrawerHeader";
import Option from "../RideDetails/Components/Option";
//styles
import { DrawerStyles } from "../../Styles/DrawerStyle";
import { FontTypeStyles } from "../../../../Global/Styles/FontTypeStyles";
import RideDetailsStyles from "../RideDetails/Styles/RideDetailsStyles";
import { Colors } from "../../../../Global/Styles/AppColors";
import { BookingStyles } from "../../../../Screens/Booking/Styles/BookingStyles";
import { GlobalStyles } from "../../../../Global/Styles/GlobalStyles";
import { SupportStyles } from "./Styles/SupportStyles";

function Support(root: any) {
    const navigation = root.navigation;

    const handleNavigation = () => {
        navigation.navigate('BookingScreen');
    };

    return (
        <View style={DrawerStyles.menuOptionContainer}>
            <DrawerHeader
                onClick={handleNavigation}
                title="Support"
                bg={Colors.orange}
            />
            <ScrollView
                bounces={false}
            >
                <View style={GlobalStyles.flex}>
                    <View style={GlobalStyles.alignItemsCnt}>
                        <View
                            style={SupportStyles.orangeTop}
                        />
                        <View style={SupportStyles.optionsBoxWrapper}>
                            <View style={SupportStyles.optionsBox}>
                                <View style={[
                                    BookingStyles.shadowStyle,
                                    DrawerStyles.historyBoxContainer,
                                    { marginBottom: 0 }
                                ]}>
                                    <View style={[
                                        GlobalStyles.flexDirColumn, {
                                            paddingVertical: 10
                                        }]}>
                                        <Option
                                            title={'Frequently asked questions'}
                                            onClick={() => {
                                                navigation.navigate("FAQ")
                                            }} />
                                        <Option
                                            title={'Your support tickets'}
                                            onClick={() => {
                                                navigation.navigate("Tickets")
                                            }} />
                                        <Option
                                            title={'Contact us'}
                                            noDivider
                                            onClick={() => {

                                            }} />
                                    </View>
                                </View>
                            </View>

                            <View
                                style={SupportStyles.optionsLineBox}
                            >
                                <View style={[
                                    DrawerStyles.historyBoxContainer,
                                    BookingStyles.shadowStyle,
                                    SupportStyles.option]}>
                                    <FastImage
                                        source={require('../DriverDetails/Assets/loved.png')}
                                        style={SupportStyles.miniIcons}
                                        resizeMode="contain"
                                    />
                                    <Text style={[
                                        FontTypeStyles.bold,
                                        RideDetailsStyles.rateText,
                                        SupportStyles.optionText
                                    ]}>
                                        Option 1
                                    </Text>
                                </View>
                                <View style={[
                                    DrawerStyles.historyBoxContainer,
                                    BookingStyles.shadowStyle,
                                    SupportStyles.option]}>
                                    <FastImage
                                        source={require('./Assets/payment.png')}
                                        style={SupportStyles.miniIcons}
                                        resizeMode="contain"
                                    />
                                    <Text style={[
                                        FontTypeStyles.bold,
                                        RideDetailsStyles.rateText,
                                        SupportStyles.optionText
                                    ]}>
                                        Option 2
                                    </Text>
                                </View>
                                <View style={[
                                    DrawerStyles.historyBoxContainer,
                                    BookingStyles.shadowStyle,
                                    SupportStyles.option]}>
                                    <FastImage
                                        source={require('../DriverDetails/Assets/calendar.png')}
                                        style={SupportStyles.miniIcons}
                                        resizeMode="contain"
                                    />
                                    <Text style={[
                                        FontTypeStyles.bold,
                                        RideDetailsStyles.rateText,
                                        SupportStyles.optionText
                                    ]}>
                                        Option 3
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default Support;
