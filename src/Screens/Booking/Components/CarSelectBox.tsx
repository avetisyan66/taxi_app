import { memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
//styles
import { BookingStyles } from "../Styles/BookingStyles";

interface ICarSelect {
    CarStatus: string,
    RoadPrice: string,
    RoadDuration: string,
    CarImage: any,
    isSelected: boolean,
    onSelect: () => void
}

const CarSelectBox = ({ CarStatus, RoadPrice, RoadDuration, CarImage, isSelected, onSelect }: ICarSelect) => {
    return (
        <View style={BookingStyles.selectionView}>
            <TouchableOpacity
                style={[BookingStyles.carSelectBoxWrapper,
                { opacity: isSelected ? 1 : .3 }]}
                onPress={onSelect}
            >
                <Image
                    source={CarImage}
                    style={BookingStyles.carImage}
                    resizeMode="contain"
                />
                <Text style={BookingStyles.carStatusText}>
                    {CarStatus}
                </Text>
                <Text style={BookingStyles.roadPriceText}>
                    {RoadPrice}
                </Text>
                <View style={BookingStyles.roadDurationWrapper}>
                    <Text style={BookingStyles.roadDurationText}>
                        {RoadDuration}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default memo(CarSelectBox);