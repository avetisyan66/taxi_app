import { Text, TouchableOpacity, View } from "react-native"
import { memo } from "react";
//icons
import ArrowDown from "../../../../../Global/Icons/ArrowDown";
//styles
import { Colors } from "../../../../../Global/Styles/AppColors";
import { BookingStyles } from "../../../../../Screens/Booking/Styles/BookingStyles";
import { DrawerStyles } from "../../../Styles/DrawerStyle";

interface IHistoryBox {
    rideDate: string,
    rideStartTime: string,
    rideEndTime: string,
    rideStartLocation: string,
    rideEndLocation: string,
    rideStatus?: string,
    navigation?: any,
    clickable?: boolean
}

const HistoryBox = ({
    rideDate,
    rideStartTime,
    rideEndTime,
    rideStartLocation,
    rideEndLocation,
    rideStatus,
    navigation,
    clickable = true,
}: IHistoryBox) => {

    return (
        <TouchableOpacity style={[
            clickable ? BookingStyles.shadowStyle : null,
            DrawerStyles.historyBoxContainer
            , {
                borderWidth: clickable ? 0 : .5,
                borderColor: Colors.lightGray
            }]}
            activeOpacity={clickable ? 0 : 1}
            onPress={() => {
                clickable && navigation.navigate("RideDetails")
            }}>
            <View style={DrawerStyles.dateAndStatusWrapper}>

                <Text style={DrawerStyles.dateStatusText}>
                    {rideDate}
                </Text>
                {rideStatus && <Text style={[
                    DrawerStyles.dateStatusText, {
                        color: Colors.red
                    }]}>
                    {rideStatus}
                </Text>}
            </View>
            <View
                style={DrawerStyles.dividerLine}
            />
            <View style={BookingStyles.addressChooseWrapper}>
                <View style={[{ width: 55 }]}>
                    <View style={DrawerStyles.timeAndIconWrapper}>
                        <Text style={DrawerStyles.timeText}>
                            {rideStartTime}
                        </Text>
                        <View style={BookingStyles.orangeCircle} />

                    </View>
                    <View style={DrawerStyles.thinLineWrapper}>
                        <View style={DrawerStyles.thinLine} />
                    </View>
                    <View style={DrawerStyles.timeAndIconWrapper}>
                        <Text style={DrawerStyles.timeText}>
                            {rideEndTime}
                        </Text>
                        <ArrowDown />
                    </View>
                </View>
                <View style={DrawerStyles.locationsWrapper}>
                    <Text style={[
                        DrawerStyles.locationText, {
                            marginBottom: 30
                        }]}
                        numberOfLines={3}>
                        {rideStartLocation}
                    </Text>
                    <Text style={DrawerStyles.locationText}
                        numberOfLines={3}>
                        {rideEndLocation}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default memo(HistoryBox);