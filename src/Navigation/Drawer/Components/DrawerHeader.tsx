import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
//icons
import LeftArrow from "../../../Global/Icons/LeftArrow";
//styles
import { BookingStyles } from "../../../Screens/Booking/Styles/BookingStyles";
import { FontTypeStyles } from "../../../Global/Styles/FontTypeStyles";
import { DrawerStyles } from "../Styles/DrawerStyle";
import { Colors } from "../../../Global/Styles/AppColors";
//constants
import { IS_PLATFORM_ANDROID } from "../../../Global/Constants/constants";

interface IDrawerHeader {
    title?: string,
    onClick: Function,
    bg?: string
};

const DrawerHeader = ({ title, onClick, bg }: IDrawerHeader) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[
            DrawerStyles.headerContainer, {
                paddingTop: insets.top + (IS_PLATFORM_ANDROID ? 10 : 0),
                paddingBottom: 10,
                backgroundColor: bg ? bg : Colors.white,
                marginBottom: bg ? 0 : 10
            }]}>
            <TouchableOpacity
                style={[
                    BookingStyles.shadowStyle,
                    DrawerStyles.leftIconButton
                ]}
                onPress={() => onClick()}>
                <LeftArrow />
            </TouchableOpacity>
            <Text
                style={[FontTypeStyles.bold, {
                    fontSize: 20,
                    color: bg ? Colors.white : Colors.darkBlue
                }]}
                numberOfLines={2}>
                {title}
            </Text>
            <View style={{
                width: 35,
                height: 35,
            }} />
        </View>
    )
};

export default memo(DrawerHeader);