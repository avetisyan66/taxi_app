import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from '../Screens/Booking/BookingScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BookingScreenExample">
      <Stack.Screen
        name="BookingScreen"
        component={BookingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
