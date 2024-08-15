import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
//styles
import { BookingStyles } from "../../Booking/Styles/BookingStyles";
import { Colors } from "../../../Global/Styles/AppColors";
//icons
import { CloseX } from "../../../Global/Icons/CloseX";
import StreightLinesMenu from "../../../Global/Icons/StreightLinesMenu";

interface IListItem {
    name: string,
    index?: number,
    onDragStart: () => void,
    onDragEnd: () => void,
};

const ListItem = ({ name, index, onDragStart, onDragEnd }: IListItem) => {

    return (
        <View style={BookingStyles.iterationStopsWrapper}>
            <View style={BookingStyles.numberAndLocationWrapper}>
                <View style={BookingStyles.numberWrapper}>
                    <Text style={BookingStyles.numberText}>
                        {index}
                    </Text>
                </View>
                <Text style={BookingStyles.crntLocText}>
                    {name}
                </Text>
            </View>
            <View style={BookingStyles.closeAndMenuWrapper}>
                <TouchableOpacity style={BookingStyles.closeButton}>
                    <CloseX
                        width={10}
                        height={10}
                        bg={Colors.white}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPressIn={onDragStart}
                    onPressOut={onDragEnd}
                >
                    <StreightLinesMenu />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default memo(ListItem);