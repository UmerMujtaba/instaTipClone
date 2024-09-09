import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {startTransition, useState, useRef} from 'react';
import styles from './styles';
import CustomTextInput from '../../components/textFields';
import LinearGradient from 'react-native-linear-gradient';

import Strings from '../../constants/strings';

const RegisterationScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState();
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState();
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSecure, setIsSecure] = useState(false);
  const [isSecureCheck, setIsSecureCheck] = useState(false);

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.mainBody}>
          <Text style={styles.startedText}>Get started</Text>
          <Text style={styles.freeAccText}>by creating free account</Text>

          <View style={styles.content}>
            <CustomTextInput
              value={name}
              onChangeText={setName}
              placeholder="Name"
              imageSource={require('../../assets/images/user.png')}
              keyboardType="default"
              suffixIconStyle={{width: 24, height: 26.4}}
              rightIcon
              // returnKeyType="next"
              // onSubmitEditing={() => ref_input2.current.focus()}
            />

            <CustomTextInput
              // ref={ref_input2}
              value={surName}
              onChangeText={setSurName}
              placeholder="Surname"
              imageSource={require('../../assets/images/user.png')}
              keyboardType="default"
              suffixIconStyle={{width: 24, height: 26.4}}
              rightIcon
              // returnKeyType="next"
              
              // onSubmitEditing={() => ref_input3.current.focus()}
            />
            <CustomTextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              imageSource={require('../../assets/images/emailIcon.png')}
              keyboardType="email-address"
              suffixIconStyle={{width: 24, height: 26.4}}
              rightIcon
            />

            <CustomTextInput
              value={phoneNo}
              onChangeText={setPhoneNo}
              placeholder="Phone Number"
              imageSource={require('../../assets/images/smartphone.png')}
              keyboardType="phone-pad"
              suffixIconStyle={{width: 24, height: 26.4}} // Style for email icon
              rightIcon
            />

            <CustomTextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Strong Password"
              suffixIcon={require('../../assets/images/eyeIcon.png')}
              keyboardType="default"
              secureTextEntry={isSecureCheck ? true : false}
              suffixIconStyle={{width: 24, height: 26.4}}
              eyeSource={
                isSecureCheck
                  ? require('../../assets/images/eyeIcon.png')
                  : require('../../assets/images/eyeIconHide.png')
              }
              eye
              eyePress={() => setIsSecureCheck(!isSecureCheck)}
            />

            <CustomTextInput
              value={repeatPassword}
              onChangeText={setRepeatPassword}
              placeholder="Repeat Password"
              eyeSource={
                isSecure
                  ? require('../../assets/images/eyeIcon.png')
                  : require('../../assets/images/eyeIconHide.png')
              }
              keyboardType="default"
              secureTextEntry={isSecure ? true : false}
              eye
              eyePress={() => setIsSecure(!isSecure)}
              suffixIconStyle={{width: 24, height: 26.4}}
            />

            <View style={styles.remembrCheckbox}>
              <TouchableOpacity
                style={[styles.checkbox, isChecked && styles.checkedBox]}
                onPress={() => setIsChecked(!isChecked)}>
                {isChecked && <Text style={styles.tickMark}>✓</Text>}
              </TouchableOpacity>
              <Text style={styles.rememberText}>
                {' '}
                By checking the box you agree to our{' '}
                <Text style={styles.terms}>Terms & Conditions</Text>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate('Dashboard')}>
              <LinearGradient
                start={{x: 0.0, y: 0.5}}
                end={{x: 1.0, y: 0.5}}
                locations={[0, 0.5]}
                colors={['#34F5C5', '#1DCDFE']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.loginText}>
              <Text style={styles.accountLabel}>{Strings.haveAnAccount}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.login}>{Strings.login}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterationScreen;
