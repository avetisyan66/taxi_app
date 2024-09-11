import { View, TextInput } from "react-native";
//components
import CustomButton from "../../../../Global/Components/CustomButton/CustomButton";
import DrawerHeader from "../../Components/DrawerHeader";
//styles
import { DrawerStyles } from "../../Styles/DrawerStyle";
import { UserProfileStyles } from "../UserProfile/Styles/UserProfileStyles";
import { PromocodeStyles } from "../Promocode/Styles/PromocodeStyles";
import { GlobalStyles } from "../../../../Global/Styles/GlobalStyles";

function AddPromocode(root: any) {
    const navigation = root.navigation;
    const handleNavGoBack = () => {
        navigation.navigate('Promocode');
    };

    return (
        <View style={DrawerStyles.menuOptionContainer}>
            <DrawerHeader
                title={'Add promocode'}
                onClick={handleNavGoBack}
            />
            <View
                style={[GlobalStyles.flex,
                GlobalStyles.justifAlignCnt
                ]}
            >
                <TextInput
                    style={PromocodeStyles.textInputStyle}
                />
            </View>
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

export default AddPromocode;
