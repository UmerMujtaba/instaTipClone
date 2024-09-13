// authStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialScreen from '../../screens/auth/tutorialScreen';
import LoginScreen from '../../screens/auth/signInScreen';
import RegisterationScreen from '../../screens/auth/signUpScreen';

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator initialRouteName="Tutorial">
      <AuthStack.Screen name="Tutorial" component={TutorialScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Register" component={RegisterationScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};

export default Auth;
