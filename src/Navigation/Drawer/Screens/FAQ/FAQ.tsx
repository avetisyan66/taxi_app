import { View, ScrollView, Text } from "react-native";
//components
import DrawerHeader from "../../Components/DrawerHeader";
import Option from "../RideDetails/Components/Option";
//styles
import { DrawerStyles } from "../../Styles/DrawerStyle";
import { UserProfileStyles } from "../UserProfile/Styles/UserProfileStyles";
import { GlobalStyles } from "../../../../Global/Styles/GlobalStyles";
import { SupportStyles } from "../Support/Styles/SupportStyles";

function FAQ(root: any) {
    const navigation = root.navigation;

    const handleNavigation = () => {
        navigation.navigate('Support');
    };

    return (
        <View style={DrawerStyles.menuOptionContainer}>
            <DrawerHeader
                title={'FAQ’s'}
                onClick={handleNavigation}
            />
            <ScrollView
                contentContainerStyle={[
                    DrawerStyles.historyBoxesWrapper,
                ]}
                bounces={false}
            >
                <Text
                    style={[
                        UserProfileStyles.notificationText,
                        SupportStyles.titleText
                    ]}>
                    Account
                </Text>
                <View style={[
                    GlobalStyles.flexDirColumn, {
                        paddingVertical: 10
                    }]}>
                    <Option
                        title={'Unblock account'}
                        onClick={() => {

                        }} />
                    <Option
                        title={'Change phone number '}
                        onClick={() => {

                        }} />
                    <Option
                        title={'Privacy information'}
                        noDivider
                        onClick={() => {

                        }} />
                </View>
                <Text
                    style={[
                        UserProfileStyles.notificationText,
                        SupportStyles.titleText
                    ]}>
                    Payment and pricing
                </Text>
                <View style={[
                    GlobalStyles.flexDirColumn, {
                        paddingVertical: 10
                    }]}>
                    <Option
                        title={'Accepted payment methods'}
                        onClick={() => {

                        }} />
                    <Option
                        title={'Price estimation'}
                        onClick={() => {

                        }} />
                    <Option
                        title={'Ride cancellation fee'}
                        onClick={() => {

                        }} />
                    <Option
                        title={'Damage or cleaning fee'}
                        onClick={() => {

                        }} />
                    <Option
                        title={'Price higher than expected'}
                        onClick={() => {

                        }} />
                    <Option
                        title={'Ride cancellation fee'}
                        onClick={() => {

                        }} />
                    <Option
                        title={'Using a coupon'}
                        noDivider
                        onClick={() => {

                        }} />
                </View>
            </ScrollView>
        </View>
    )
};

export default FAQ;
