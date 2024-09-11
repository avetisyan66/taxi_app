import { View, ScrollView, Text } from "react-native";
//components
import CustomButton from "../../../../Global/Components/CustomButton/CustomButton";
import DrawerHeader from "../../Components/DrawerHeader";
//styles
import { GlobalStyles } from "../../../../Global/Styles/GlobalStyles";
import { DrawerStyles } from "../../Styles/DrawerStyle";
import { BookingStyles } from "../../../../Screens/Booking/Styles/BookingStyles";
import RideDetailsStyles from "../RideDetails/Styles/RideDetailsStyles";
import { PromocodeStyles } from "./Styles/PromocodeStyles";
import { UserProfileStyles } from "../UserProfile/Styles/UserProfileStyles";

function Promocode(root: any) {
    const navigation = root.navigation;
    const handleNavGoBack = () => {
        navigation.navigate('BookingScreen');
    };

    return (
        <View style={DrawerStyles.menuOptionContainer}>
            <DrawerHeader
                title={'Promo'}
                onClick={handleNavGoBack}
            />
            <ScrollView
                contentContainerStyle={[
                    DrawerStyles.historyBoxesWrapper,
                ]}
                bounces={false}
            >
                <View style={[
                    BookingStyles.shadowStyle,
                    DrawerStyles.historyBoxContainer,
                    { marginTop: 20 }
                ]}>
                    <View style={[
                        GlobalStyles.flexDirColumn, {
                            paddingVertical: 10
                        }]}>
                        <Text style={[
                            RideDetailsStyles.driverText,
                            RideDetailsStyles.driverNameText]}>
                            30% discount
                        </Text>
                        <Text style={[
                            RideDetailsStyles.thinText, {
                                fontSize: 13
                            }]}>
                            Kate used 2 rides with 30% discount from Rakuten
                        </Text>
                        <View style={[
                            GlobalStyles.flexDirRow,
                            GlobalStyles.alignItemsCnt,
                            { marginTop: 15 }
                        ]}>
                            <View
                                style={PromocodeStyles.grayCircle}
                            />
                            <View
                                style={[PromocodeStyles.grayCircle, {
                                    left: -15
                                }]}
                            />
                            <View
                                style={[PromocodeStyles.grayCircle, {
                                    left: -30
                                }]}
                            />
                        </View>
                    </View>
                </View>
                <View style={[
                    BookingStyles.shadowStyle,
                    DrawerStyles.historyBoxContainer
                ]}>
                    <View style={[
                        GlobalStyles.flexDirColumn, {
                            paddingVertical: 10
                        }]}>
                        <Text style={[
                            RideDetailsStyles.driverText,
                            RideDetailsStyles.driverNameText]}>
                            30% discount
                        </Text>
                        <Text style={[RideDetailsStyles.thinText, { fontSize: 13 }]}>
                            Kate used 2 rides with 30% discount from Rakuten
                        </Text>
                        <View style={[
                            GlobalStyles.flexDirRow,
                            GlobalStyles.alignItemsCnt,
                            { marginTop: 15 }
                        ]}>
                            <View
                                style={PromocodeStyles.grayCircle}
                            />
                            <View
                                style={[PromocodeStyles.grayCircle, {
                                    left: -15
                                }]}
                            />
                            <View
                                style={[PromocodeStyles.grayCircle, {
                                    left: -30
                                }]}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={[UserProfileStyles.fixedButton]}>
                <CustomButton
                    onClick={() => {
                        navigation.navigate('AddPromocode')
                    }}
                    title={'Add promocode'}
                />
            </View>
        </View>
    )
};

export default Promocode;
