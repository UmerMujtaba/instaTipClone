import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBarWithMenu from '../../../components/appBar'
import { images } from '../../../assets/images'

import { useTranslation } from 'react-i18next';

const AddressScreen = ({ navigation }) => {

  const { t, i18n } = useTranslation();
  const [languageValue, setLanguageValue] = useState(null);

  useEffect(() => {
    // Set the initial value based on the current language
    setLanguageValue(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <View style={{ backgroundColor: '#213142', flex: 1 }}>
      <AppBarWithMenu
        onBackPress={() => navigation.goBack()}
        onEditPress={() => console.log("Edit Pressed")}
        editIcon={images.editIcon} // You can pass different edit icons here
        menuIcon={images.addressIcon}
        menuText={t('address')}
      />
    </View>
  )
}
export default AddressScreen






