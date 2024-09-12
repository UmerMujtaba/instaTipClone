import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView,Alert } from 'react-native'
import React,{useEffect} from 'react'
import styles from './styles'
import { images } from '../../assets/images'
import MenuTile from '../../components/menuTile'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useTranslation } from 'react-i18next';

import i18next, { languageResources } from '../../../src/localization/i18n'


const MenuScreen = ({navigation}) => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    GoogleSignin.configure({
       webClientId : "430210225303-df0gv59djhjmno104qgltc4on576skb6.apps.googleusercontent.com"
    });
  }, []);
  
  // Sign out function
  const handleSignOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      
     
      console.log("🚀 ~ handleSignOut ~ User signed out successfully:", console)
      Alert.alert('Success', 'You have been logged out.');
      navigation.navigate('Login'); // Navigate back to the login screen
    } catch (error) {
      console.error('Sign out error: ', error);
      Alert.alert('Sign-Out Error', 'An error occurred while signing out.');
    }
     
  };


  return (
    <View style={styles.container}>
      <ImageBackground source={images.menuTopBgImage} resizeMode='cover' style={styles.topBgImage} >

        <View style={styles.appBar}>
          <View style={styles.imageAvatar}>
            <Image source={images.userImages} style={styles.imageAvatar} />
          </View>

          <TouchableOpacity>
            <View style={styles.notificationImageContainer}>
              <Image
                source={images.notification}
                style={styles.notificationImage}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.menuIconBgContainer}>
        <Image source={images.menuIconFilled} style={styles.menuFilledImage} />

      </View>
      <View style={styles.menuTextBgContainer}><Text style={styles.menuText}>{t('menu')} </Text></View>
     

      <View style={styles.MenuContent}>
      <ScrollView 
     showsVerticalScrollIndicator={false}
      >
        <MenuTile
          iconSource={images.personalDetailIcon}
          label={t('personalDetails')}
          onPress={() => {
            // Define onPress action here
          }}
        />
          <MenuTile
          iconSource={images.addressIcon}
          label={t('address')}
          onPress={() => {
            // Define onPress action here
          }}
        />
          <MenuTile
          iconSource={images.bankIcon}
          label={t('bankAccount')}
          onPress={() => {
            // Define onPress action here
          }}
        />
          <MenuTile
          iconSource={images.securityIcon}
          label={t('passwordAndSecurity')}
          onPress={() => {
            // Define onPress action here
          }}
        />
         <MenuTile
          iconSource={images.languageIcon}
          label={t('languageAndCurrency')}
          onPress={() => 
             navigation.navigate('Language')
          }
        />
         <MenuTile
          iconSource={images.usergGuideIcon}
          label={t('userGuide')}
          onPress={() => {
            // Define onPress action here
          }}
        />
        <MenuTile
          iconSource={images.supportIcon}
          label={t('support')}
          onPress={() => {
            // Define onPress action here
          }}
        />
        <MenuTile
          iconSource={images.termsIcon}
          label={t('termsAndConditions')}
          onPress={() => {
            // Define onPress action here
          }}
        />
        <MenuTile
          iconSource={images.policyIcon}
          label={t('privacyPolicy')}
          onPress={() => {
            // Define onPress action here
          }}
        />
        <MenuTile
          iconSource={images.logoutIcon}
          label={t('logout')}
          onPress={() => {
            handleSignOut()
          }}
        />
       </ScrollView>
      </View>
     
    </View>
  )
}
export default MenuScreen