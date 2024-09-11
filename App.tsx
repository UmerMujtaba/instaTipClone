import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/loginScreen';
import RegisterationScreen from './src/screens/registerationScreen';
import Tabs from './src/components/bottomTab';
import FirstScreen from './src/screens/startScreen';
import language from './src/screens/languageScreen';
import LanguageScreen from './src/screens/languageScreen';
// import DashboardScreen from './src/screens/dashboardScreen';
import i18n from './src/localization/i18n';
import { I18nextProvider } from 'react-i18next';
const Stack = createStackNavigator();
const App = () => {
  // Correct placement of the useEffect hook inside the component
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen when the app is ready
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="firstScreen" component={FirstScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterationScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Language" component={LanguageScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </I18nextProvider>
  );
};

export default App;
