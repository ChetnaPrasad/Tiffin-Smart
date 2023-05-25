// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash/Splash';
import SignUp from '../Screens/Signup/SignUp';
import SignIn from '../Screens/SignIn/SignIn';
import Dashboard from '../Screens/Dashboard/dashboard';
import Forgot from '../Screens/Forgotpassword/Forgotp';
import Reset from '../Screens/Forgotpassword/Reset';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={SignIn} />
        <Stack.Screen options={{headerShown: false}} name="Registration" component={SignUp} />
        <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
        <Stack.Screen options={{headerShown: false}} name="Forgot" component={Forgot} />
        <Stack.Screen options={{headerShown: false}} name="Reset" component={Reset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;