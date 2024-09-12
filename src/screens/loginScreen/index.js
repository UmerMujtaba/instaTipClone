import React, {useState,useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Alert,StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Strings from '../../constants/strings';
import styles from './styles';
import CustomTextInput from '../../components/textFields';
import {images} from '../../assets/images';
import { Formik } from 'formik';
import GradientButton from '../../components/button';
import { useTranslation } from 'react-i18next';
import i18next, { languageResources } from '../../../src/localization/i18n'
import useValidationSchema from '../../hooks/cuponTranslatedData';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';




const LoginScreen = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSecureCheck, setIsSecureCheck] = useState(false);
  const validationSchema = useValidationSchema();
  const { t, i18n } = useTranslation();

  const handleFormSubmit = (values) => {
    Alert.alert("Success", 'Logged in successfully', [{ text: "OK", onPress: () => console.log("OK Pressed") }]);
    navigation.navigate('Dashboard');
  };
  
  const webClientId = "430210225303-df0gv59djhjmno104qgltc4on576skb6.apps.googleusercontent.com"; 
  useEffect(()=>{
    GoogleSignin.configure({
        webClientId: webClientId,
    })
},[])

const googleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log("🚀 ~ googleLogin ~ userInfo:", userInfo)
    
    navigation.navigate('Dashboard');
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      Alert.alert('Sign-In Cancelled', 'User cancelled the login flow.');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Alert.alert('Sign-In In Progress', 'Sign-in is in progress.');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      Alert.alert('Play Services Not Available', 'Play services are not available.');
    } else {
      console.error("Google Sign-In Error:", error);
      Alert.alert('Sign-In Error', 'An error occurred during sign-in.');
    }
  }
};


  
  return (
    
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleFormSubmit(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        
    <View style={styles.container}>
       <StatusBar translucent backgroundColor="transparent" />
      <TouchableOpacity
        style={styles.backImageContainer}
        onPress={() => navigation.goBack()}>
        <Image
          source={images.backIcon}
          style={styles.backImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.body}>
        <Image source={images.apllicationLogo} style={styles.logoImage} />
        <View style={styles.mainContent}>
          
          <CustomTextInput
            value={values.email}
            onChangeText={handleChange('email')}
            placeholder={t('email')}
            onBlur={handleBlur('email')}
            imageSource={images.emailIcon}
            keyboardType="email-address"
            suffixIconStyle={{width: 24, height: 26.4}}
            rightIcon
          />{(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>
                }
          <CustomTextInput
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder={t('password')}
            onBlur={handleBlur('password')}
            suffixIcon={images.eyeIcon}
            keyboardType="default"
            secureTextEntry={isSecureCheck ? true : false}
            suffixIconStyle={{width: 24, height: 26.4}}
           
            eyeSource={
              isSecureCheck
                ? images.eyeIcon
                : images.eyeIconHide
            }
            eye
            eyePress={() => setIsSecureCheck(!isSecureCheck)}
          />
          
          {(errors.password && touched.password) &&
                  <Text style={styles.errorText}>{errors.password}</Text>
                }
          <View style={styles.forgotPassword}>
            <View style={styles.remembrCheckbox}>
              <TouchableOpacity
                style={[styles.checkbox, isChecked && styles.checkedBox]}
                onPress={() => setIsChecked(!isChecked)}>
                {isChecked && <Text style={styles.tickMark}>✓</Text>}
              </TouchableOpacity>
              <Text style={styles.rememberText}>{t('rememberMe')}</Text>
            </View>
            <TouchableOpacity onPress={''}>
              <Text style={styles.forgotText}>{t('forgotPassword')}</Text>
            </TouchableOpacity>
          </View>



          <GradientButton
                onPress={handleSubmit}
                buttonText={t('login')}
                style={styles.registerButton}
              />


         

          <View style={styles.lineRow}>
            <Image source={images.line2} />
            <Text style={styles.lineBtwnText}>{t('orLogInWith')}</Text>
            <Image source={images.line2} />
          </View>

          <View style={styles.socialMediaIcons}>
            <TouchableOpacity style={styles.icons} >
              <Image source={images.appleLogo} style={styles.logoStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
              <Image
                source={images.facebookLogo}
                style={[styles.logoStyle, styles.logoStyle2]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons} onPress={googleLogin}>
              <Image
                source={images.googleLogo}
                style={[styles.logoStyle, styles.logoStyle3]}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{backgroundColor:"red",flex:1}}/> */}

        <View style={styles.footer}>
          <Text style={styles.footerText1}>{t('termsTxt')}</Text>
          <TouchableOpacity>
            <Text style={styles.footerText2}>{t('privacyPolicy')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
