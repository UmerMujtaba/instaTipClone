import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../constants/fonts';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#213142',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  frame: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  carouselWrapper: {
    height: height * 0.6, // Takes half the screen height for the carousel
    justifyContent: 'center', // Vertically centers the carousel
    alignItems: 'center', // Horizontally centers the carousel
    overflow: 'hidden',
  },
  carouselImage: {
    width: width * 0.65,  // Adjust width based on itemWidth
    height: height * 0.4,  // Adjust height
    resizeMode: 'contain',
  },

  carouselTitle: {
    marginTop: 20,
    fontFamily: fonts.SF_PRO_TEXT.Outfit.SemiBold,
    fontSize: 24,
    //fontWeight: 'bold',
    color: '#FFFFFF',

    textAlign: 'center',
  },

  registerButton: {
    marginTop: 30,
    width: 302,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#213142',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  linearGradient: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    height: '100%',
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
  },
  login: {
    color: '#29E2E0',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  activeDot: {
    width: 6.11,
    height: 6,
    borderRadius: 6,
    backgroundColor: '#1DCDFE',
  },
  inactiveDot: {
    width: 6.11,
    height: 6,
    borderRadius: 5,
    backgroundColor: 'grey',
  },
});
