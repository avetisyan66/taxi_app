import { View, ScrollView, Text } from "react-native";
import FastImage from "react-native-fast-image";
//components
import DrawerHeader from "../../Components/DrawerHeader";
//styles
import { DrawerStyles } from "../../Styles/DrawerStyle";
import { FontTypeStyles } from "../../../../Global/Styles/FontTypeStyles";
import RideDetailsStyles from "../RideDetails/Styles/RideDetailsStyles";
import { Colors } from "../../../../Global/Styles/AppColors";

function DriverDetails(root: any) {
    const navigation = root.navigation;

    const handleNavigation = () => {
        navigation.navigate('RideDetails');
    };

    return (
        <View style={DrawerStyles.menuOptionContainer}>
            <DrawerHeader
                title={'Driver details'}
                onClick={handleNavigation}
            />
            <ScrollView
                contentContainerStyle={[
                    DrawerStyles.historyBoxesWrapper,
                ]}
                bounces={false}
            >
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    alignItems: 'center'
                }}>
                    <FastImage
                        source={require('../../../../Screens/DriverArrive/Assets/driver.png')}
                        style={RideDetailsStyles.driverIcon}
                        resizeMode="contain"
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={[
                            RideDetailsStyles.driverText,
                            RideDetailsStyles.driverNameText]}>
                            Leonard
                        </Text>
                        <Text style={RideDetailsStyles.thinText}>
                            Volkswagen Jetta
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 15
                    }}
                >
                    <View style={[
                        DrawerStyles.historyBoxContainer
                        , {
                            borderWidth: .5,
                            borderColor: Colors.lightGray,
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '30%'
                        }]}>
                        <FastImage
                            source={require('./Assets/rate.png')}
                            style={{
                                height: 30,
                                width: 30
                            }}
                            resizeMode="contain"
                        />
                        <Text style={[
                            FontTypeStyles.standard,
                            RideDetailsStyles.rateText,
                            { marginLeft: 0 }
                        ]}>
                            4.8
                        </Text>
                    </View>
                    <View style={[
                        DrawerStyles.historyBoxContainer
                        , {
                            borderWidth: .5,
                            borderColor: Colors.lightGray,
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '30%'
                        }]}>
                        <FastImage
                            source={require('./Assets/loved.png')}
                            style={{
                                height: 30,
                                width: 30
                            }}
                            resizeMode="contain"
                        />
                        <Text style={[
                            FontTypeStyles.standard,
                            RideDetailsStyles.rateText,
                            { marginLeft: 0 }
                        ]}>
                            126
                        </Text>
                    </View>
                    <View style={[
                        DrawerStyles.historyBoxContainer
                        , {
                            borderWidth: .5,
                            borderColor: Colors.lightGray,
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '30%'
                        }]}>
                        <FastImage
                            source={require('./Assets/calendar.png')}
                            style={{
                                height: 30,
                                width: 30
                            }}
                            resizeMode="contain"
                        />
                        <Text style={[
                            FontTypeStyles.standard,
                            RideDetailsStyles.rateText,
                            { marginLeft: 0 }
                        ]}>
                            2 years
                        </Text>
                    </View>
                </View>
                <View style={[
                    DrawerStyles.historyBoxContainer
                    , {
                        borderWidth: .5,
                        borderColor: Colors.lightGray,
                        flexDirection: 'column',
                        width: '100%',
                        gap: 15
                    }]}>
                    <View style={{
                        flexDirection: 'column',
                        marginTop: 15
                    }}>
                        <Text style={DrawerStyles.timeText}>
                            Member since
                        </Text>
                        <Text style={[
                            FontTypeStyles.standard,
                            RideDetailsStyles.rateText,
                            {
                                marginLeft: 0,
                                marginBottom: 15
                            }
                        ]}>
                            16.06.2017
                        </Text>
                        <View style={{
                            height: 1,
                            backgroundColor: Colors.lightGray
                        }} />
                    </View>
                    <View style={{
                        flexDirection: 'column'
                    }}>
                        <Text style={DrawerStyles.timeText}>
                            Car type
                        </Text>
                        <Text style={[
                            FontTypeStyles.standard,
                            RideDetailsStyles.rateText,
                            {
                                marginLeft: 0,
                                marginBottom: 15
                            }
                        ]}>
                            Van
                        </Text>
                        <View style={{
                            height: 1,
                            backgroundColor: Colors.lightGray
                        }} />
                    </View>
                    <View style={{
                        flexDirection: 'column'
                    }}>
                        <Text style={DrawerStyles.timeText}>
                            Plate number
                        </Text>
                        <Text style={[
                            FontTypeStyles.standard,
                            RideDetailsStyles.rateText,
                            {
                                marginLeft: 0,
                                marginBottom: 15
                            }
                        ]}>
                            HS785K
                        </Text>
                        <View style={{
                            height: 1,
                            backgroundColor: Colors.lightGray
                        }} />
                    </View>
                    <View style={{
                        flexDirection: 'column'
                    }}>
                        <Text style={DrawerStyles.timeText}>
                            Plate number
                        </Text>
                        <Text style={[
                            FontTypeStyles.standard,
                            RideDetailsStyles.rateText,
                            {
                                marginLeft: 0,
                                marginBottom: 15
                            }
                        ]}>
                            HS785K
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default DriverDetails;
