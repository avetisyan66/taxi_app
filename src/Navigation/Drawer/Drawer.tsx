import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Animated, TouchableOpacity, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
//constants
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../Global/Constants/constants';
//styles
import { GlobalStyles } from '../../Global/Styles/GlobalStyles';
import { DrawerStyles } from './Styles/DrawerStyle';
import { BookingStyles } from '../../Screens/Booking/Styles/BookingStyles';
import { Colors } from '../../Global/Styles/AppColors';

export interface IDrawerRef {
    openDrawer: () => void;
    closeDrawer: () => void;
    isDrawerOpened: () => boolean;
}

const CustomDrawerContent = forwardRef<IDrawerRef, { navigation: any }>(
    ({ navigation }, ref) => {
        const [drawerAnimation] = useState(new Animated.Value(-WINDOW_WIDTH));
        const [overlayOpacity] = useState(new Animated.Value(0.3));
        const [isDrawerOpened, setIsDrawerOpened] = useState(false);

        useImperativeHandle(ref, () => ({
            openDrawer,
            closeDrawer,
            isDrawerOpened: () => isDrawerOpened,
        }));

        const openDrawer = () => {
            Animated.parallel([
                Animated.timing(drawerAnimation, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(overlayOpacity, {
                    toValue: 0.3,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start(() => setIsDrawerOpened(true));
        };

        const closeDrawer = () => {
            Animated.parallel([
                Animated.timing(drawerAnimation, {
                    toValue: -WINDOW_WIDTH,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(overlayOpacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start(() => setIsDrawerOpened(false));
        };

        return (
            <Animated.View
                style={[
                    {
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        height: WINDOW_HEIGHT,
                        width: WINDOW_WIDTH,
                        transform: [{ translateX: drawerAnimation }],
                        zIndex: 999,
                    },
                    GlobalStyles.fullHeight,
                ]}
            >
                <View
                    style={[
                        {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            height: WINDOW_HEIGHT,
                            width: WINDOW_WIDTH * 0.75,
                            backgroundColor: 'white',
                            zIndex: 999,
                        },
                        GlobalStyles.fullHeight,
                    ]}
                >
                    <View style={DrawerStyles.drawerContainer}>
                        <View style={DrawerStyles.firstPartWrapper}>
                            <View style={GlobalStyles.flexDirRow}>
                                <FastImage
                                    source={require('../../Screens/DriverArrive/Assets/driver.png')}
                                    style={DrawerStyles.userProfileIcon}
                                    resizeMode="contain"
                                />
                                <TouchableOpacity
                                    style={DrawerStyles.editIconButton}
                                    onPress={() => {
                                        navigation.navigate("UserProfile")
                                    }}
                                >
                                    <FastImage
                                        source={require('../../Screens/DriverArrive/Assets/edit.png')}
                                        style={DrawerStyles.editIcon}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={DrawerStyles.userNameText} numberOfLines={2}>
                                Carson
                            </Text>
                            <Text style={DrawerStyles.emailText} numberOfLines={1}>
                                carson@mobility.com
                            </Text>
                        </View>
                    </View>
                    <View style={DrawerStyles.menuOptionsWrapper}>
                        <TouchableOpacity onPress={() => navigation.navigate('RideHistory')}>
                            <Text style={DrawerStyles.menuOptionText}>RIDE HISTORY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={DrawerStyles.menuOptionText}>PAYMENT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={DrawerStyles.optionsWithNotCountWrapper}
                            onPress={() => navigation.navigate('Promocode')}
                        >
                            <Text style={[DrawerStyles.menuOptionText, { marginTop: 0 }]}>
                                PROMOCODE
                            </Text>
                            <View style={[BookingStyles.shadowStyle, DrawerStyles.optionsNotificationCount]}>
                                <Text style={[DrawerStyles.menuOptionText, { marginTop: 0 }]}>
                                    1
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Support')}
                        >
                            <Text style={DrawerStyles.menuOptionText}>SUPPORT</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={DrawerStyles.signOutButton}>
                        <Text style={DrawerStyles.signOutText}>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View
                    style={[
                        {
                            opacity: overlayOpacity,
                            flex: 1
                        },
                    ]}
                >
                    <TouchableOpacity
                        style={[
                            {
                                opacity: overlayOpacity,
                                flex: 1,
                                backgroundColor: Colors.lightGray
                            },
                        ]}
                        activeOpacity={0}
                        onPress={closeDrawer}
                    />
                </Animated.View>
            </Animated.View>
        );
    });

export default CustomDrawerContent;
