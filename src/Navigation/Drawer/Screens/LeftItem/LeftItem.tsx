import { View, ScrollView, Text, TextInput } from "react-native";
//components
import DrawerHeader from "../../Components/DrawerHeader";
import CustomButton from "../../../../Global/Components/CustomButton/CustomButton";
//styles
import { DrawerStyles } from "../../Styles/DrawerStyle";
import { UserProfileStyles } from "../UserProfile/Styles/UserProfileStyles";
import { SupportStyles } from "../Support/Styles/SupportStyles";

function LeftItem(root: any) {
    const navigation = root.navigation;

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
                    I left an item
                </Text>
                <Text
                    style={SupportStyles.descriptionText}
                >
                    If you've lost an item you will need to send us an message immediately, please remembering to provide us with as many details as possible about your lost item and the ride you took. If we find it we’ll connect you with the driver directly to get it back.
                </Text>
                <Text
                    style={[
                        UserProfileStyles.notificationText,
                        SupportStyles.titleText,
                        SupportStyles.headerText
                    ]}>
                    TELL US
                </Text>
                <TextInput
                    style={SupportStyles.ticketTextInput}
                    placeholder="Your message here..."
                    multiline
                />
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

export default LeftItem;
