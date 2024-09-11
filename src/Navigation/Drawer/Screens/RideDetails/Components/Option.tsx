import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
//styles
import { GlobalStyles } from "../../../../../Global/Styles/GlobalStyles";
import { FontTypeStyles } from "../../../../../Global/Styles/FontTypeStyles";
import { Colors } from "../../../../../Global/Styles/AppColors";
import RideDetailsStyles from "../Styles/RideDetailsStyles";
//icons
import ArrowRight from "../../../../../Global/Icons/ArrowRight";

const Option = ({ title, onClick, noDivider }: { title: string, onClick: Function, noDivider?: boolean }) => {
    return (
        <>
            <TouchableOpacity style={[
                GlobalStyles.alignItemsCnt,
                GlobalStyles.rowJustBetween,
                { height: 60 }
            ]}
                onPress={() => onClick()}>
                <Text style={[
                    FontTypeStyles.standard,
                    RideDetailsStyles.rateText,
                    { color: Colors.darkestGray }
                ]}>
                    {title}
                </Text>
                <ArrowRight />
            </TouchableOpacity>
            {!noDivider && <View style={{
                height: 1,
                backgroundColor: Colors.lightGray
            }} />}
        </>
    )
};

export default memo(Option);