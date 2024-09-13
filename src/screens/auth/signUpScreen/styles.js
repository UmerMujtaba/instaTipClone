import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../../constants/fonts';

import {hp, rfs, rhp, rwp, width, wp} from '../../../constants/dimensions';

export default StyleSheet.create({
  container: {
    backgroundColor: '#213142',
    flex: 1,
  },
  errorText: {
    color: 'red',
    //marginTop: 2,
    marginBottom: 5,
    textAlign:'center'
  },
  mainBody: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  startedText: {
    fontFamily: fonts.SF_PRO_TEXT.inter.SemiBold,
    fontSize: rfs(36),
    color: '#FFFFFF',
  },
  freeAccText: {
    fontFamily: fonts.SF_PRO_TEXT.inter.Regular,
    fontSize: rfs(23),
    color: '#FFFFFF',
    marginBottom: 40,
  },
  content: {
    width: rwp(350),
    //height: rwp(620),
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
    fontFamily:fonts.SF_PRO_TEXT.inter.Regular,
  },
  terms: {
    color: '#29E2E0',
    fontSize: 10,
    fontFamily:fonts.SF_PRO_TEXT.inter.Regular,
  },
  registerButton: {
    marginTop: 20,
    width: 330,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
  },
  loginText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    fontFamily:fonts.SF_PRO_TEXT.inter.Regular,
  },
  accountLabel: {
    color: '#64748B',
    fontSize: 16,
    fontFamily:fonts.SF_PRO_TEXT.inter.Regular,
  },
  login: {
    color: '#29E2E0',
    fontSize: 16, 
    
    marginLeft: 5,
    fontFamily:fonts.SF_PRO_TEXT.inter.SemiBold,
  },
});
