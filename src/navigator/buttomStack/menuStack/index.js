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
import MenuOptionsScreen from '../../../screens/bottom/menuScreen';

const MenuStack = createNativeStackNavigator();

const MenuStackNavigator = () => {
  return (
    <MenuStack.Navigator initialRouteName='MenuOptionsScreen'>
      <MenuStack.Screen 
        name="MenuOptionsScreen" 
      component={MenuOptionsScreen}
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="PersonalDetailsS" 
        component={PersonalDetailsScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="AddressS" 
        component={AddressScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="BankAccountS" 
        component={BankAccountScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="PasswordAndSecuirtyS" 
        component={PasswordAndSecurityScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="Language" 
        component={LanguageScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="UserGuideScreen" 
        component={UserGuideScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="SupportS" 
        component={SupportScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="TermsAndConditionsS" 
        component={TermsAndConditionsScreen} 
        options={{ headerShown: false }} 
      />
      <MenuStack.Screen 
        name="PrivacyS" 
        component={PrivacyPolicyScreen} 
        options={{ headerShown: false }} 
      />
    </MenuStack.Navigator>
  );
};

export default MenuStackNavigator;
