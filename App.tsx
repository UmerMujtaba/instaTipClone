import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './src/screens/startScreen/index';
import LoginScreen from './src/screens/loginScreen';
import RegisterationScreen from './src/screens/registerationScreen';
import DashboardScreen from './src/screens/dashboardScreen';
import Tabs from './src/components/bottomTab';
// import DashboardScreen from './src/screens/dashboardScreen';
const Stack = createStackNavigator();
const App = () => {
  // Correct placement of the useEffect hook inside the component
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen when the app is ready
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='firstScreen'>
        <Stack.Screen name="firstScreen" component={FirstScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterationScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
