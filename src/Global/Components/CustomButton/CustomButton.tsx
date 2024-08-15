import { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
//styles
import { CustomButtonStyles } from "./Styles/CustomButtonStyles";
import { BookingStyles } from "../../../Screens/Booking/Styles/BookingStyles";
import { Colors } from "../../Styles/AppColors";

interface ICustomButton {
    onClick: Function,
    title: string,
    bgColor?: string
};

const CustomButton = ({ onClick, title, bgColor = Colors.orange }: ICustomButton) => {

    return (
        <TouchableOpacity style={[
            CustomButtonStyles.orangeButtonWrapper,
            BookingStyles.shadowStyle,
            { backgroundColor: bgColor }
        ]}
            onPress={() => {
                onClick();
            }}
        >
            <Text style={[CustomButtonStyles.orangeButtonText,
            {
                color: bgColor === Colors.orange
                    ? Colors.white
                    : Colors.darkBlue
            }
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
};

export default memo(CustomButton);