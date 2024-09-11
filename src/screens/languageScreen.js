import React from 'react';
import { SafeAreaView, Text, TouchableOpacity,Image } from 'react-native';
import { useTranslation } from 'react-i18next';

import i18next, { languageResources } from '../../src/localization/i18n'
import Strings from '../constants/strings';
import { images } from '../assets/images';

const LanguageScreen = ({navigation}) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return (

      <SafeAreaView style={{backgroundColor: 'pink',marginTop: '40%',padding: 40,marginLeft: 40}}>

<TouchableOpacity
        style={{backgroundColor: '#2F455C',
          width: 48,
          height: 48,
          marginTop: 50,
          marginLeft: 20,
          borderRadius: 100,
          alignItems:'center',
          justifyContent:'center',}}
        onPress={() => navigation.goBack()}>
        <Image
          source={images.backIcon}
          style={{ width: 10.26,
            height: 20,}}
          resizeMode="contain"
        />
      </TouchableOpacity>
        <Text>{t('address')}</Text>
        {/* <Text>{t(Strings.address)}</Text> */}
        <Text>{t('bankAccount')}</Text>
        <TouchableOpacity onPress={() => changeLanguage('en')}>
          <Text>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('fr')}>
          <Text>french</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  export default LanguageScreen;
  
