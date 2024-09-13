import {StyleSheet} from 'react-native';
import fonts from '../../../constants/fonts';

import {hp, rfs, rhp, rwp, wp} from '../../../constants/dimensions';

export default StyleSheet.create({
  container: {
    backgroundColor: '#213142',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  frameStyle: {
    position: 'absolute',
    width: wp(100),
    height: hp(100),
  },

  carouselWrapper: {
   // backgroundColor: 'pink',
    height: rhp(500), // Takes half the screen height for the carousel
    //justifyContent: 'center', // Vertically centers the carousel
    //alignItems: 'center', // Horizontally centers the carousel
    overflow: 'hidden',
  },
  carouselImage: {
    width: rwp(230.48),  // Adjust width based on itemWidth
    height:rhp(279.99)  ,// Adjust height
    resizeMode: 'contain',
  },

  carouselTitle: {
    marginTop: 5,
    fontFamily:fonts.SF_PRO_TEXT.inter.SemiBold,

    // fontFamily: fonts.SF_PRO_TEXT.Outfit.SemiBold,
    fontSize: 24,
    //fontWeight: 'bold',
    color: '#FFFFFF',

    textAlign: 'center',
  },

  registerButton: {
    marginTop: 20,
    width: rwp(315),
    height: rhp(50),
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#213142',
    //fontWeight: 'bold',
   fontSize: 18,
    textAlign: 'center',
    fontFamily:fonts.SF_PRO_TEXT.inter.SemiBold,
  },
  linearGradient: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    height:'100%',
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
  loginText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  accountLabel: {
    color: '#64748B',
    fontSize: 16,
    fontFamily:fonts.SF_PRO_TEXT.inter.Regular,
  },
  login: {
    color: '#29E2E0',
    fontSize: 16,
    //fontWeight: 'bold',
    marginLeft: 5,
    fontFamily:fonts.SF_PRO_TEXT.inter.SemiBold,
  },
  activeDot: {
    width: rwp(6.11),
    height: rhp(6),
    borderRadius: 6,
    backgroundColor: '#1DCDFE',
  },
  inactiveDot: {
    width: rwp(6.11),
    height: rhp(6),
    borderRadius: 5,
    backgroundColor: 'grey',
  },
});
