import { memo } from "react";
import { Animated, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
//constants
import { IS_PLATFORM_ANDROID } from "../../../Global/Constants/constants";
//styles
import { MapStyles } from "../Styles/MapStyles";
import { BookingStyles } from "../../Booking/Styles/BookingStyles";

interface ILocation {
    showCancelBtmButton: boolean,
    showAddSelection: boolean,
    innerCircleSize: any,
    outerCircleSize: any
};

function Location({ showCancelBtmButton, showAddSelection, innerCircleSize, outerCircleSize }: ILocation) {
    return (
        <>
            {showCancelBtmButton && <View style={MapStyles.locationWrapper}>
                <Animated.View
                    style={[
                        MapStyles.littleCircleView,
                        {
                            width: innerCircleSize,
                            height: innerCircleSize,
                            borderRadius: Animated.divide(innerCircleSize, 2),
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        MapStyles.bigCircleView,
                        {
                            width: outerCircleSize,
                            height: outerCircleSize,
                            borderRadius: Animated.divide(outerCircleSize, 2),
                        },
                    ]}
                />
            </View>}

            <View style={[
                MapStyles.secondWrapper, {
                    top: showCancelBtmButton
                        ? '46%'
                        : (IS_PLATFORM_ANDROID
                            ? '21%'
                            : '27%'),
                }]}>
                {(showAddSelection || showCancelBtmButton) ? <View style={[
                    BookingStyles.duartionWrapper, {
                        backgroundColor: undefined
                    }]}>
                    <Text style={[
                        BookingStyles.roadDurationText, {
                            zIndex: 9
                        }]} />
                </View> : <View style={[
                    BookingStyles.roadDurationWrapper,
                    BookingStyles.duartionWrapper]}>
                    <Text style={[
                        BookingStyles.roadDurationText, {
                            zIndex: 9
                        }]}>
                        3 min
                    </Text>
                </View>
                }
                <FastImage
                    style={BookingStyles.userLocImg}
                    resizeMode='contain'
                    source={require('../../Booking/Assets/userLoc.png')}
                />
            </View>
        </>
    )
};

export default memo(Location);