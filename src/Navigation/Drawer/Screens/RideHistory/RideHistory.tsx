import { View, ScrollView } from "react-native";
import DrawerHeader from "../../Components/DrawerHeader";
//components
import HistoryBox from "./Components/HistoryBox";
//styles
import { DrawerStyles } from "../../Styles/DrawerStyle";

function RideHistory(root: any) {
    const navigation = root.navigation;

    const handleNavigation = () => {
        navigation.navigate('BookingScreen');
    };

    return (
        <View style={DrawerStyles.menuOptionContainer}>
            <DrawerHeader
                title={'Ride history'}
                onClick={handleNavigation}
            />
            <ScrollView
                contentContainerStyle={DrawerStyles.historyBoxesWrapper}
            >
                <HistoryBox
                    rideDate={'8 June 2019, 18:39'}
                    rideStartTime={'11:24'}
                    rideEndTime={'11:38'}
                    rideStartLocation={'1, Thrale Street, London, SE19HW, UK'}
                    rideEndLocation={'Ealing Broadway Shopping Centre, London, W55JY, UK'}
                    navigation={navigation}
                />
                <HistoryBox
                    rideDate={'10 June 2019, 21:53'}
                    rideStartTime={'18:03'}
                    rideEndTime={'18:44'}
                    rideStartLocation={'1, Thrale Street, London, SE19HW, UK'}
                    rideEndLocation={'18, Ocean avenue, London, SE19HW, UK'}
                    rideStatus={'CANCELLED'}
                    navigation={navigation}
                />
                <HistoryBox
                    rideDate={'19 Jul 2017, 23:23'}
                    rideStartTime={'18:03'}
                    rideEndTime={'18:44'}
                    rideStartLocation={'1, Thrale Street, London, SE19HW, UK'}
                    rideEndLocation={'18, Ocean avenue, London, SE19HW, UK'}
                    navigation={navigation}
                />
                <HistoryBox
                    rideDate={'19 Jul 2017, 23:23'}
                    rideStartTime={'18:03'}
                    rideEndTime={'18:44'}
                    rideStartLocation={'1, Thrale Street, London, SE19HW, UK'}
                    rideEndLocation={'18, Ocean avenue, London, SE19HW, UK'}
                    navigation={navigation}
                />
            </ScrollView>
        </View>
    )
};

export default RideHistory;
