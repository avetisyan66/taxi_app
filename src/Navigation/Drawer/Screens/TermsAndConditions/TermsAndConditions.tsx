import { View, ScrollView, Text } from "react-native";
//components
import DrawerHeader from "../../Components/DrawerHeader";
//styles
import { DrawerStyles } from "../../Styles/DrawerStyle";
import { FontTypeStyles } from "../../../../Global/Styles/FontTypeStyles";
import { UserProfileStyles } from "../UserProfile/Styles/UserProfileStyles";

function TermsAndConditions(root: any) {
    const navigation = root.navigation;

    const handleNavGoBack = () => {
        navigation.navigate('BookingScreen');
    };

    return (
        <View style={DrawerStyles.menuOptionContainer}>
            <DrawerHeader
                onClick={handleNavGoBack}
            />
            <ScrollView
                contentContainerStyle={[
                    DrawerStyles.historyBoxesWrapper,
                ]}
                bounces={false}
            >
                <Text
                    style={[UserProfileStyles.notificationText, {
                        fontSize: 20,
                        textAlign: 'center'
                    }]}>
                    Terms & Conditions
                </Text>
                <Text
                    style={[UserProfileStyles.notificationText, {
                        fontSize: 13,
                        textAlign: 'center',
                        marginBottom: 40
                    }]}>
                    TAXI CUSTOMER TERMS & CONDITIONS
                </Text>
                <Text style={[
                    FontTypeStyles.standard, {
                        fontSize: 15,
                        marginBottom: 40
                    }]}>
                    IMPORTANT: {`\n`} {`\n`}

                    THESE TERMS AND CONDITIONS (“Conditions”) DEFINE THE BASIS UPON WHICH GETT WILL PROVIDE YOU WITH ACCESS TO THE GETT MOBILE APPLICATION PLATFORM, PURSUANT TO WHICH YOU WILL BE ABLE TO REQUEST CERTAIN TRANSPORTATION SERVICES FROM THIRD PARTY DRIVERS BY PLACING ORDERS THROUGH GETT’S MOBILE APPLICATION PLATFORM. THESE CONDITIONS (TOGETHER WITH THE DOCUMENTS REFERRED TO HEREIN) SET OUT THE TERMS OF USE ON WHICH YOU MAY, AS A CUSTOMER, USE THE APP AND REQUEST TRANSPORTATION SERVICES. {`\n`}BY USING THE APP AND TICKING THE ACCEPTANCE BOX, YOU INDICATE THAT YOU ACCEPT THESE TERMS OF USE WHICH APPLY, AMONG OTHER THINGS, TO ALL SERVICES HEREINUNDER TO BE RENDERED TO OR BY YOU VIA THE APP WITHIN THE UK AND THAT YOU AGREE TO ABIDE BY THEM. USE THE APP AND REQUEST TRANSPORTATION SERVICES. BY USING THE APP AND TICKING THE ACCEPTANCE BOX, YOU INDICATE THAT YOU ACCEPT THESE TERMS OF USE WHICH APPLY, AMONG OTHER THINGS, TO ALL SERVICES HEREINUNDER TO BE RENDERED TO OR BY YOU VIA THE APP WITHIN THE UK AND THAT YOU AGREE TO ABIDE BY THEM.{`\n`}BY USING THE APP AND TICKING THE ACCEPTANCE BOX, YOU INDICATE THAT YOU ACCEPT THESE TERMS OF USE WHICH APPLY, AMONG OTHER THINGS, TO ALL SERVICES HEREINUNDER TO BE RENDERED TO OR BY YOU VIA THE APP WITHIN THE UK AND THAT YOU AGREE TO ABIDE BY THEM. USE THE APP AND REQUEST TRANSPORTATION SERVICES. BY USING THE APP AND TICKING THE ACCEPTANCE BOX, YOU INDICATE THAT YOU ACCEPT THESE TERMS OF USE WHICH APPLY, AMONG OTHER THINGS, TO ALL SERVICES HEREINUNDER TO BE RENDERED TO OR BY YOU VIA THE APP WITHIN THE UK AND THAT YOU AGREE TO ABIDE BY THEM.
                </Text>
            </ScrollView>
        </View>
    )
};

export default TermsAndConditions;
