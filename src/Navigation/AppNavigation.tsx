import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './Drawer/Drawer';
//screens
import BookingScreen from '../Screens/Booking/BookingScreen';
import RideHistory from './Drawer/Screens/RideHistory/RideHistory';
import RideDetails from './Drawer/Screens/RideDetails/RideDetails';
import DriverDetails from './Drawer/Screens/DriverDetails/DriverDetails';
import UserProfile from './Drawer/Screens/UserProfile/UserProfile';
import TermsAndConditions from './Drawer/Screens/TermsAndConditions/TermsAndConditions';
import Promocode from './Drawer/Screens/Promocode/Promocode';
import AddPromocode from './Drawer/Screens/AddPromocode/AddPromocode';
import Support from './Drawer/Screens/Support/Support';
import FAQ from './Drawer/Screens/FAQ/FAQ';
import Tickets from './Drawer/Screens/Tickets/Tickets';
import Accident from './Drawer/Screens/Accident/Accident';
import LeftItem from './Drawer/Screens/LeftItem/LeftItem';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BookingScreen">
      <Stack.Screen
        name="BookingScreen"
        component={BookingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RideHistory"
        component={RideHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RideDetails"
        component={RideDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DriverDetails"
        component={DriverDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Promocode"
        component={Promocode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddPromocode"
        component={AddPromocode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Support"
        component={Support}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQ}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tickets"
        component={Tickets}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LeftItem"
        component={LeftItem}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Accident"
        component={Accident}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
