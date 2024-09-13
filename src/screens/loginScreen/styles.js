import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../constants/fonts';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#213142',
    flex: 1,
  },
 
    errorText: {
      color: 'red',
      // marginTop: 5,
      // marginBottom: 5,
    
  },
  backImage: {
    width: 10.26,
    height: 20,
     },

  backImageContainer:{
    backgroundColor: '#2F455C',
    width: 48,
    height: 48,
    marginTop: 50,
    marginLeft: 20,
    borderRadius: 100,
    alignItems:'center',
    justifyContent:'center',
  },

  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 180,
    height: 74,
    marginBottom: 80,
  },
  mainContent: {
    
    justifyContent: 'center',
    alignItems: 'center',
    width: 330,
    height: 317,
  },
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    marginBottom: 20,
    alignItems: 'center', // Align checkbox and text vertically
   
  },
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: '#29E2E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  checkedBox: {
    backgroundColor: '#29E2E0',
  },
  tickMark: {
    color: '#000000',
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 12, // Ensures the tick mark is centered
  },
  remembrCheckbox: {
    flexDirection: 'row',
    alignItems: 'center', // Align checkbox and text on the same line
  },
  rememberText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginLeft: 5, // Add space between checkbox and text
    fontFamily:fonts.SF_PRO_TEXT.inter.Regular,
  },
  forgotText: {
    color: '#29E2E0',
    fontSize: 12,
    fontFamily:fonts.SF_PRO_TEXT.inter.Regular,
  },

  registerButton: {
    marginTop: 15,
    width: 330,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
  },
 
  lineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
   
  },
  lineBtwnText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#64748B',
  },
  socialMediaIcons: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    width: 320,
    marginTop: 20,
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 98.07,
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C4C4C4',
    backgroundColor: '#213142',
  },

  
  logoStyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  logoStyle2: {
    width: 10.08,
    height: 18.57,
  },
  logoStyle3: {
    width: 16.33,
    height: 16.67,
  },
  footer: {
    marginTop: '35%',
    //backgroundColor: 'red',
    // bottom: 20,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingVertical: 10,
    // backgroundColor: '#213142',
  },
  footerText1: {
    color: '#64748B',
    fontSize: 15,
    textAlign: 'center',
    fontFamily:fonts.SF_PRO_TEXT.inter.Regular,
  },
  footerText2: {
    color: '#29E2E0',
    fontSize: 15,
    textAlign: 'center',
    fontFamily:fonts.SF_PRO_TEXT.inter.Regular,
    //fontFamily: fonts.SF_PRO_TEXT.
  },
});
