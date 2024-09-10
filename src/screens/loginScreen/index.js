import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Strings from '../../constants/strings';
import styles from './styles';
import CustomTextInput from '../../components/textFields';
import { images } from '../../assets/images';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
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
        <Image
          source={images.apllicationLogo}
          style={styles.logoImage}
        />
        <View style={styles.mainContent}>
          <CustomTextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            suffixIcon={images.emailIcon}
            keyboardType="email-address"
            suffixIconStyle={{ width: 24, height: 26.4 }} 
            
          />

          <CustomTextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            suffixIcon={images.eyeIcon}
            keyboardType="default"
            secureTextEntry
            suffixIconStyle={{ width: 24, height: 26.4 }} 
          />

          <View style={styles.forgotPassword}>
            <View style={styles.remembrCheckbox}>
              <TouchableOpacity
                style={[styles.checkbox, isChecked && styles.checkedBox]}
                onPress={() => setIsChecked(!isChecked)}>
                {isChecked && <Text style={styles.tickMark}>✓</Text>}
              </TouchableOpacity>
              <Text style={styles.rememberText}> Remember me</Text>
            </View>
            <TouchableOpacity onPress={''}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('Register')}>
            <LinearGradient
              start={{x: 0.0, y: 0.5}}
              end={{x: 1.0, y: 0.5}}
              locations={[0, 0.5]}
              colors={['#34F5C5', '#1DCDFE']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>{Strings.login}</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.lineRow}>
            <Image source={images.line2} />
            <Text style={styles.lineBtwnText}>Or log in with</Text>
            <Image source={images.line2} />
          </View>

          <View style={styles.socialMediaIcons}>
            <TouchableOpacity style={styles.icons}>
              <Image
                source={images.appleLog}
                style={styles.logoStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
              <Image
                source={images.facebookLog}
                style={[styles.logoStyle, styles.logoStyle2]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
              <Image
                source={images.googleLog}
                style={[styles.logoStyle, styles.logoStyle3]}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{backgroundColor:"red",flex:1}}/> */}

        <TouchableOpacity style={styles.footer}>
          <Text style={styles.footerText1}>{Strings.termsTxt}</Text>
          <Text style={styles.footerText2}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
