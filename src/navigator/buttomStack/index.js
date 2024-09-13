// bottomStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../../components/bottomTab';
import LanguageScreen from '../../screens/bottom/languageScreen';
import UserGuideScreen from '../../screens/bottom/userGuideScreen';

const BottomStack = createNativeStackNavigator();

const Bottom = () => {
  return (
    <BottomStack.Navigator initialRouteName="tabs">
      <BottomStack.Screen name="tabs" component={Tabs} options={{ headerShown: false }} />
      <BottomStack.Screen name="Language" component={LanguageScreen} options={{ headerShown: false }} />
      <BottomStack.Screen name="UserGuideScreen" component={UserGuideScreen} options={{ headerShown: false }} />
    </BottomStack.Navigator>
  );
};

export default Bottom;
