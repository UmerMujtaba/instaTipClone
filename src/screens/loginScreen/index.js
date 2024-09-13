import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StatusBar, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Strings from '../../constants/strings';
import styles from './styles';
import CustomTextInput from '../../components/textFields';
import { images } from '../../assets/images';
import { Formik } from 'formik';
import GradientButton from '../../components/button';
import { useTranslation } from 'react-i18next';
import useValidationSchema from '../../hooks/cuponTranslatedData';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk-next'; // Update import


const LoginScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSecureCheck, setIsSecureCheck] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const validationSchema = useValidationSchema();
  const { t } = useTranslation();
  const isIOS = Platform.OS === 'ios';

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "430210225303-df0gv59djhjmno104qgltc4on576skb6.apps.googleusercontent.com",
    });
  }, []);

  const getUserInfo = (token) => {
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken: token,
        parameters: {
          fields: {
            string: 'id,name,first_name,last_name,email',
          },
        },
      },
      (error, result) => {
        if (error) {
          console.error("Error fetching user info: ", error);
        } else {
          setUserInfo(result);
          console.log("User info: ", result);
        }
      }
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  };

  const handleLoginFinished = (error, result) => {
    if (error) {
      console.error("Facebook Login Error: ", error);
    } else if (result.isCancelled) {
      console.log('Login cancelled');
    } else {
      AccessToken.getCurrentAccessToken().then(data => {
        const accessToken = data.accessToken.toString();
        getUserInfo(accessToken);
      });
    }
  };

  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then(result => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            getUserInfo(accessToken);
          });
        }
      })
      .catch(error => {
        console.error('Login fail with error: ', error);
      });
  };

  const logoutWithFacebook = () => {
    LoginManager.logOut();
    setUserInfo(null);
  };

  const handleFormSubmit = (values) => {
    Alert.alert("Success", 'Logged in successfully', [{ text: "OK", onPress: () => console.log("OK Pressed") }]);
    navigation.navigate('Dashboard');
  };

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("🚀 ~ googleLogin ~ userInfo:", userInfo);
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

  const isLogin = userInfo && userInfo.name;
  const buttonText = isLogin ? 'Logout With Facebook' : 'Login With Facebook';
  const onPressButton = isLogin ? logoutWithFacebook : loginWithFacebook;

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" />
          <TouchableOpacity
            style={styles.backImageContainer}
            onPress={() => navigation.goBack()}
          >
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
                suffixIconStyle={{ width: 24, height: 26.4 }}
                rightIcon
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <CustomTextInput
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder={t('password')}
                onBlur={handleBlur('password')}
                suffixIcon={images.eyeIcon}
                keyboardType="default"
                secureTextEntry={isSecureCheck}
                suffixIconStyle={{ width: 24, height: 26.4 }}
                eyeSource={
                  isSecureCheck
                    ? images.eyeIcon
                    : images.eyeIconHide
                }
                eye
                eyePress={() => setIsSecureCheck(!isSecureCheck)}
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <View style={styles.forgotPassword}>
                <View style={styles.remembrCheckbox}>
                  <TouchableOpacity
                    style={[styles.checkbox, isChecked && styles.checkedBox]}
                    onPress={() => setIsChecked(!isChecked)}
                  >
                    {isChecked && <Text style={styles.tickMark}>✓</Text>}
                  </TouchableOpacity>
                  <Text style={styles.rememberText}>{t('rememberMe')}</Text>
                </View>
                <TouchableOpacity onPress={null}>
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

              <View style={[styles.socialMediaIcons , {justifyContent: isIOS ? 'space-between' : 'space-around'}]}>

                {Platform.OS === 'ios' && (
                <TouchableOpacity style={styles.icons}>
                  <Image source={images.appleLogo} style={styles.logoStyle} />
                </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.icons} onPress={onPressButton}>
                  {userInfo && userInfo.name && (
                    <Text style={{ fontSize: 16, marginVertical: 16 }}>
                      Logged in As {userInfo.name}
                    </Text>
                  )}
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
