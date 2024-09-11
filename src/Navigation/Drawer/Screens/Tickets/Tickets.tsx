import { View, ScrollView, Text } from "react-native";
//components
import DrawerHeader from "../../Components/DrawerHeader";
import Option from "../RideDetails/Components/Option";
//styles
import { DrawerStyles } from "../../Styles/DrawerStyle";
import { UserProfileStyles } from "../UserProfile/Styles/UserProfileStyles";
import { GlobalStyles } from "../../../../Global/Styles/GlobalStyles";
import { SupportStyles } from "../Support/Styles/SupportStyles";

function Tickets(root: any) {
    const navigation = root.navigation;

    const handleNavigation = () => {
        navigation.navigate('Support');
    };

    return (
        <View style={DrawerStyles.menuOptionContainer}>
            <DrawerHeader
                title={'Tickets'}
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
                    Requests
                </Text>
                <View style={[
                    GlobalStyles.flexDirColumn, {
                        paddingVertical: 10
                    }]}>
                    <Option
                        title={'I left an item'}
                        onClick={() => {
                            navigation.navigate('LeftItem')
                        }} />
                    <Option
                        title={'I was involved in an accident '}
                        onClick={() => {
                            navigation.navigate('Accident')
                        }} />
                </View>
            </ScrollView>
        </View>
    )
};

export default Tickets;
