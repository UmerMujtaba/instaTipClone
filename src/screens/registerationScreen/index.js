import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { startTransition, useState, useRef } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/textFields';
import LinearGradient from 'react-native-linear-gradient';
import Strings from '../../constants/strings';
import { images } from '../../assets/images';
import * as Yup from 'yup';
import { Formik } from 'formik';
import GradientButton from '../../components/button'; // Adjust the path as needed


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter an email address'),
  password: Yup.string()
    .required('Please enter a password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      'Password must contain at least one letter, one number, one symbol, and be at least 8 characters long.',
    ),
  name: Yup.string().required('Please enter your name'),
  surName: Yup.string().required('Please enter your surname'),
  phoneNumber: Yup.string()
    .matches(
      /^(?:\+?\d{1,3})?[-.\s]?(\(?\d{1,4}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Enter a valid phone number'
    )
    .length(13, 'Phone number must be exactly 13 characters long')
    .required('Phone number is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const RegisterationScreen = ({ navigation }) => {
  // const [name, setName] = useState('');
  // const [surName, setSurName] = useState();
  // const [email, setEmail] = useState('');
  // const [phoneNo, setPhoneNo] = useState();
  // const [password, setPassword] = useState('');
  // const [repeatPassword, setRepeatPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSecure, setIsSecure] = useState(false);
  const [isSecureCheck, setIsSecureCheck] = useState(false);

  // const ref_input2 = useRef();
  // const ref_input3 = useRef();
  // const ref_input4 = useRef();
  // const ref_input5 = useRef();

  const handleFormSubmit = values => {
    Alert.alert('Success', 'Registered successfully', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

    navigation.navigate('Login');
  };

  return (
    // <ScrollView style={styles.scrollView}>
    <Formik
      initialValues={{
        email: '',
        password: '',
        name: '',
        surName: '',
        phoneNumber: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <View style={styles.mainBody}>
            <Text style={styles.startedText}>{Strings.getStarted}</Text>
            <Text style={styles.freeAccText}>
              {Strings.byCreatingYourAccount}
            </Text>

            <View style={styles.content}>
              <CustomTextInput
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder="Name"
                imageSource={images.userOutlinedIcon}
                keyboardType="default"
                suffixIconStyle={{ width: 24, height: 26.4 }}
                rightIcon
              // returnKeyType="next"
              // onSubmitEditing={() => ref_input2.current.focus()}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}

              <CustomTextInput
                // ref={ref_input2}
                value={values.surName}
                onChangeText={handleChange('surName')}
                placeholder="Surname"
                onBlur={handleBlur('surName')}
                imageSource={images.userOutlinedIcon}
                keyboardType="default"
                suffixIconStyle={{ width: 24, height: 26.4 }}
                rightIcon
              // returnKeyType="next"

              // onSubmitEditing={() => ref_input3.current.focus()}
              />
              {touched.surName && errors.surName && (
                <Text style={styles.errorText}>{errors.surName}</Text>
              )}

              <CustomTextInput
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="Email"
                imageSource={images.emailIcon}
                keyboardType="email-address"
                suffixIconStyle={{ width: 24, height: 26.4 }}
                rightIcon
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <CustomTextInput
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                placeholder="Phone Number"
                imageSource={images.phoneIcon}
                keyboardType="phone-pad"
                suffixIconStyle={{ width: 24, height: 26.4 }} // Style for email icon
                rightIcon
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}

              <CustomTextInput
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="Strong Password"
                suffixIcon={images.eyeIcon}
                keyboardType="default"
                secureTextEntry={isSecureCheck ? true : false}
                suffixIconStyle={{ width: 24, height: 26.4 }}
                eyeSource={isSecureCheck ? images.eyeIcon : images.eyeIconHide}
                eye
                eyePress={() => setIsSecureCheck(!isSecureCheck)}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <CustomTextInput
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                placeholder="Repeat Password"
                keyboardType="default"
                secureTextEntry={isSecure ? true : false}
                eyePress={() => setIsSecure(!isSecure)}
                suffixIconStyle={{ width: 24, height: 26.4 }}
                eye
                eyeSource={isSecure ? images.eyeIcon : images.eyeIconHide}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}

              <View style={styles.remembrCheckbox}>
                <TouchableOpacity
                  style={[styles.checkbox, isChecked && styles.checkedBox]}
                  onPress={() => setIsChecked(!isChecked)}>
                  {isChecked && <Text style={styles.tickMark}>✓</Text>}
                </TouchableOpacity>
                <Text style={styles.rememberText}>
                  {Strings.byCheckingTheBox}
                  <Text style={styles.terms}>{Strings.termsAndConditions}</Text>
                </Text>
              </View>


              {/* button
               */}

              <GradientButton
                onPress={handleSubmit}
                buttonText={Strings.next}
                style={styles.registerButton}
              />
              {/* <TouchableOpacity
                style={styles.registerButton}
                onPress={handleSubmit}>
                <LinearGradient
                  start={{x: 0.0, y: 0.5}}
                  end={{x: 1.0, y: 0.5}}
                  locations={[0, 0.5]}
                  colors={['#34F5C5', '#1DCDFE']}
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText}>{Strings.next}</Text>
                </LinearGradient>
              </TouchableOpacity> */}


              {/* footer text */}
              <View style={styles.loginText}>
                <Text style={styles.accountLabel}>{Strings.haveAnAccount}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.login}>{Strings.login}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default RegisterationScreen;
