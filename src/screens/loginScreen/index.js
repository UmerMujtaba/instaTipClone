import React, {useState} from 'react';
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




  // const validateInput = () => {
  //   if (!email && !password) {
  //     // If both are empty
  //     showAlert("Please enter an email address and password.");
  //     return false;
  //   }

  //   // Individual email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (email && !emailRegex.test(email)) {
  //     showAlert("Please enter a valid email address.");
  //     return false;
  //   }

  //   // Individual password validation
  //   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  //   if (password && !passwordRegex.test(password)) {
  //     showAlert(
  //       "Password must contain at least one letter, one number, one symbol, and be at least 8 characters long."
  //     );
  //     return false;
  //   }

  //   return true; // Validation successful
  // };

  // const showAlert = (message) => {
  //   Alert.alert("Invalid Input", message, [{ text: "OK", onPress: () => console.log("OK Pressed") }]);
  // };

  // // Function to validate email and password before navigating
  // const handleRegisterPress = () => {
  //   const isValid = validateInput();

  //   if (isValid) {
  //     // Reset the text fields after successful validation
  //     setEmail('');
  //     setPassword('');
  //     navigation.navigate('Dashboard'); // Navigate only if both are valid
  //   }
  // };

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
          />
  {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
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
          
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

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
            <TouchableOpacity style={styles.icons}>
              <Image source={images.appleLogo} style={styles.logoStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
              <Image
                source={images.facebookLogo}
                style={[styles.logoStyle, styles.logoStyle2]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
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
