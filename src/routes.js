import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

//pages
import Main from './pages/Main';
import Rules from './pages/Rules';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="Rules" component={Rules} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
