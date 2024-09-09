import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../constants/fonts';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#213142',
    flex: 1,
  },
  mainBody:{
    justifyContent:'center',
    alignItems:'center',
    marginTop: '20%'
  },
  startedText:{
    
    fontFamily: fonts.SF_PRO_TEXT.Outfit.medium,
    fontSize: 30,
    color: '#FFFFFF',
    
  },
  freeAccText:{

    fontFamily: fonts.SF_PRO_TEXT.inter.Regular,
    fontSize: 18,
    color: '#FFFFFF',
   marginBottom: 40
  },
  content:{
    width: 331,
    height:608
  },
  checkbox: {
    width: 13.07,
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
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center', // Align checkbox and text on the same line
  },
  rememberText: {
    color: '#64748B',
    fontSize: 10,
    marginLeft: 5, // Add space between checkbox and text
  },
  terms:{
    color: '#29E2E0',
    fontSize: 10,
  },
  registerButton: {
    marginTop: 20,
    width: 330,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#213142',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  linearGradient: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    height: '100%',
  },
  loginText: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10,
  },
  accountLabel: {
    color: '#64748B',
    fontSize: 16,
  },
  login: {
    color: '#29E2E0',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
