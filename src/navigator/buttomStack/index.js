// bottomStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../../components/bottomTab';
import LanguageScreen from '../../screens/bottom/languageScreen';
import UserGuideScreen from '../../screens/bottom/userGuideScreen';
import PersonalDetailsScreen from '../../screens/bottom/personalDetailScreen';
import AddressScreen from '../../screens/bottom/addressScreen';
import BankAccountScreen from '../../screens/bottom/bankAccountScreen';
import PasswordAndSecurityScreen from '../../screens/bottom/passwordAndSecurityScreen';
import TermsAndConditionsScreen from '../../screens/bottom/termsAndConditionsScreen';
import PrivacyPolicyScreen from '../../screens/bottom/privacyPolicyScreen';
import SupportScreen from '../../screens/bottom/supportScreen';

const BottomStack = createNativeStackNavigator();

const Bottom = () => {
  return (
    <BottomStack.Navigator initialRouteName="tabs">
      <BottomStack.Screen name="tabs" component={Tabs} options={{ headerShown: false }} />
    </BottomStack.Navigator>
  );
};

export default Bottom;
