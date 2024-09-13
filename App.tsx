// App.js
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { I18nextProvider } from 'react-i18next';
import { NavigationCheck } from './src/navigator';
import i18n from './src/localization/i18n';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen when the app is ready
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationCheck />
    </I18nextProvider>
  );
};

export default App;
