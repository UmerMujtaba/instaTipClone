import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LanguageScreen from '../../../screens/bottom/languageScreen';
import UserGuideScreen from '../../../screens/bottom/userGuideScreen';
import AddressScreen from '../../../screens/bottom/addressScreen';
import PersonalDetailsScreen from '../../../screens/bottom/personalDetailScreen';
import BankAccountScreen from '../../../screens/bottom/bankAccountScreen';
import PasswordAndSecurityScreen from '../../../screens/bottom/passwordAndSecurityScreen';
import SupportScreen from '../../../screens/bottom/supportScreen';
import TermsAndConditionsScreen from '../../../screens/bottom/termsAndConditionsScreen';
import PrivacyPolicyScreen from '../../../screens/bottom/privacyPolicyScreen';

const MenuStack = createNativeStackNavigator();

const MenuStackNavigator = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen 
        name="PersonalDetails" 
        component={PersonalDetailsScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="Address" 
        component={AddressScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="BankAcccount" 
        component={BankAccountScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="passwordAndSecurity" 
        component={PasswordAndSecurityScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="language" 
        component={LanguageScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="userGuide" 
        component={UserGuideScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="support" 
        component={SupportScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="termsAndConditions" 
        component={TermsAndConditionsScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="privacyPolicyScreen" 
        component={PrivacyPolicyScreen} 
        options={{ headerShown: false }} 
      />
    </MenuStack.Navigator>
  );
};

export default MenuStackNavigator;
