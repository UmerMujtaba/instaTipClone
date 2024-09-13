import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';
import { images } from '../../../assets/images';

import styles from './styles';
import { hp, rhp, rwp, wp } from '../../../constants/dimensions';

import fonts from '../../../constants/fonts';
import Tabs from '../../../components/bottomTab';
import CustomDropDownPicker from '../../../components/customDropDownPicker';


const LanguageScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const [openLanguageDropDown, setOpenLanguageDropDown] = useState(false);
  const [languageValue, setLanguageValue] = useState(null);
  const [languageItems, setLanguageItems] = useState([
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'Spanish', value: 'es' },
  ]);

  const [openCountryDropDown, setOpenCountryDropDown] = useState(false);
  const [countryValue, setCountryValue] = useState(null);
  const [countryItems, setCountryItems] = useState([
    { label: '🇬🇧  United Kingdom', value: 'UK'},
    { label: '🇪🇸  Spain', value: 'SP',},
    { label: '🇫🇷  France', value: 'FR'},
  ]);

  const [openCurrencyDropDown, setopenCurrencyDropDown] = useState(false);
  const [currencyValue, setcurrencyValue] = useState(null);
  const [currencyItems, setcurrencyItems] = useState([
    { label: '£  British Pound', value: 'UK pound'},
    { label: '$  USA Dollar', value: 'US Dolloar' },
    { label: '€  Euro', value: 'Spain Euro'},
  ]);


  useEffect(() => {
    // Set the initial value based on the current language
    setLanguageValue(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={images.menuTopBgImage} resizeMode='cover' style={styles.topBgImage}>
        <View style={styles.appBar}>
          <TouchableOpacity
            style={{
              backgroundColor: '#2F455C',
              width: 48,
              height: 48,
              marginLeft: 5,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={images.backIcon}
              style={{ width: 10.26, height: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.editIconContainer}>
              <Image source={images.editIcon} style={styles.editImage} />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.menuIconBgContainer}>
        <Image source={images.languageIcon} style={styles.menuFilledImage} />
      </View>
      <View style={styles.menuTextBgContainer}>
        <Text style={styles.menuText}>{t('languageAndCurrency')}</Text>
      </View>

      {/* Language DropDown */}
      <View style={{ position: 'relative', width: rwp, marginLeft: 10, marginRight: 10 , marginTop: 10}}>
        {/* Language Dropdown Label and Dropdown */}
        <Text style={{ color: 'white', fontSize: 14, fontFamily: fonts.SF_PRO_TEXT.inter.Regular,  }}>Language</Text>
        <CustomDropDownPicker
          open={openLanguageDropDown}
          value={languageValue}
          items={languageItems}
          setOpen={setOpenLanguageDropDown}
          setValue={setLanguageValue}
          setItems={setLanguageItems}
          onChangeValue={changeLanguage}
          placeholder="Select language"
          containerStyle={{
            width: wp(95),
            borderColor: 'transparent',
            position: 'absolute',
            top: 28, // Adjust this value to ensure visibility
            zIndex: 3,
            marginTop: 0
          }}
          style={{
            backgroundColor: '#2F455C',
            borderColor: 'transparent',
            height: 45,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
          textStyle={{ color: 'lightgrey', fontSize: 14 }}
          dropDownContainerStyle={{
            backgroundColor: '#2F455C',
            borderColor: 'transparent',
            borderRadius: 8,
          }}
        />

        {/* Country Dropdown Label and Dropdown */}
        <Text style={{ color: 'white', fontSize: 14, fontFamily: fonts.SF_PRO_TEXT.inter.Regular, marginTop: '20%' }}>Country</Text>
        <CustomDropDownPicker
          open={openCountryDropDown}
          value={countryValue}
          items={countryItems}
          setOpen={setOpenCountryDropDown}
          setValue={setCountryValue}
          setItems={setCountryItems}
          onChangeValue={(value) => console.log('Selected Country:', value)}
          placeholder="Select country"
          containerStyle={{
            width: wp(95),
            borderColor: 'transparent',
            position: 'absolute',
            top: 100, // Adjust this value to ensure visibility below the language dropdown
            zIndex: 2,
            marginTop: '4%' // Ensure this is below the language dropdown
          }}
          style={{
            backgroundColor: '#2F455C',
            borderColor: 'transparent',
            height: 45,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
          textStyle={{ color: 'lightgrey', fontSize: 14 }}
          dropDownContainerStyle={{
            backgroundColor: '#2F455C',
            borderColor: 'transparent',
            borderRadius: 8,
          }}
        />

<Text style={{ color: 'white', fontSize: 14, fontFamily: fonts.SF_PRO_TEXT.inter.Regular,marginTop: '20%' }}>Currency</Text>
        <CustomDropDownPicker
          open={openCurrencyDropDown}
          value={currencyValue}
          items={currencyItems}
          setOpen={setopenCurrencyDropDown}
          setValue={setcurrencyValue}
          setItems={setcurrencyItems}
          onChangeValue={(value) => console.log('Selected Currency:', value)}
          placeholder="Select Currency"
          containerStyle={{
            width: wp(95),
            borderColor: 'transparent',
            position: 'absolute',
            top: 100, // Adjust this value to ensure visibility below the language dropdown
            zIndex: 1,
            marginTop: '29%' // Ensure this is below the language dropdown
          }}
          style={{
            backgroundColor: '#2F455C',
            borderColor: 'transparent',
            height: 45,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
          textStyle={{ color: 'lightgrey', fontSize: 14 }}
          dropDownContainerStyle={{
            backgroundColor: '#2F455C',
            borderColor: 'transparent',
            borderRadius: 8,
          }}
        />
      </View>


      {/* <Tabs/> */}
    </View>
  );
};

export default LanguageScreen;
