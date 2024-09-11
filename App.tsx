import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//navigation
import AppNavigator from './src/Navigation/AppNavigation.tsx';

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
