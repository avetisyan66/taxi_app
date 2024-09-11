import { TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { memo } from "react";
//styles
import { BookingStyles } from "../Styles/BookingStyles";

const UserInitialLocButton = ({
    handleMultibleBtmBoxHeight
}: {
    handleMultibleBtmBoxHeight: Function
}) => {

    return (
        <TouchableOpacity
            style={[
                BookingStyles.shadowStyle,
                BookingStyles.userLocInitial,
                {
                    bottom: handleMultibleBtmBoxHeight() + 20,
                }
            ]}
            onPress={() => {
                // Implement navigation to initial place
            }}
        >
            <FastImage
                source={require('../Assets/navigateIcon.png')}
                style={BookingStyles.userLocIcon}
                resizeMode="contain"
            />
        </TouchableOpacity>
    )
}

export default memo(UserInitialLocButton);