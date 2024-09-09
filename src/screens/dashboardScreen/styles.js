import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../constants/fonts';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#213142',
    flex: 1,
  },
  appbarStyle: {
    marginTop: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    //backgroundColor: 'red',
    paddingLeft: 10,
  },
  imageAvatar: {
    borderRadius: 50,
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
  },
  nameImage: {
    flexDirection: 'row',
  },
  nameText: {
    fontFamily: fonts.SF_PRO_TEXT.Outfit?.Regular,
    fontSize: 22,
    color: '#FFFFFF',
    marginLeft: 10,
    marginTop: 10,
  },
  notificationImage: {
    width: 20.01,
    height: 22,
    resizeMode: 'contain',
  },

  notificationImageContainer: {
    backgroundColor: '#2F455C',
    width: 48,
    height: 48,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardImage: {
    marginTop: 20,
    width: 360,
    height: 128,
    overflow: 'hidden', // Use 'overflow' instead of 'overflowX'
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIconWrapper: {
    position: 'absolute',
    top: 10,
    right: 40,
    zIndex: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textContainer: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textWrapper: {
    alignItems: 'center',
  },
  cardMainText: {
    fontSize: 16,
    color: '#CBD5E1',
    fontFamily: fonts.SF_PRO_TEXT.inter.Regular,
  },
  cardSubText: {
    fontSize: 40,
    color: '#FFFFFF',
    marginTop: 8,
    fontFamily: fonts.SF_PRO_TEXT.inter.SemiBold,
  },
  paginationWrapper: {
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  dot: {
    width: 6.1,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#1DCDFE',
  },

  peopleRow: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  earnStyle: {
    width: 72,
    height: 114,
  },
  listContainer: {
    paddingHorizontal: 10, //
  },
  peopleContainer: {
    width: 72,
    height: 114,
    alignItems: 'center',
  },
  peopleContainer2: {
    borderRadius: 50,
    backgroundColor: '#2F455C',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  peopleImage: {
    height: 22,
    width: 22,
  },
  peopleName: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
    fontFamily: fonts.SF_PRO_TEXT.Outfit.Regular,
    opacity: 0.5,
  },
  peopleOvalContainer: {
    marginTop: 5,
    width: 52,
    height: 17,
    borderRadius: 40,
    backgroundColor: '#2F455C',
    alignItems: 'center',
  },
  flatListStyle: {
    marginLeft: 10,
    flex: 1,
  },

  discountBannerBgImage: {
    height: 100,
    width: Dimensions.get('screen').width - 20,
    alignSelf: 'center',
  },

  arrow: {
    marginTop: 2,
    height: 76,
    width: 76,
    resizeMode: 'cover',
  },

  couponContainer: {
    justifyContent: 'center',
  },
  discountBanner: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 1,
  },
  discountText: image => ({
    fontFamily: fonts.SF_PRO_TEXT.Outfit.medium,
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
    
  }),

  paginationCuponWrapper: {
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  Cupondot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 4,
  },
  CuponactiveDot: {
    backgroundColor: '#1DCDFE',
  },
});
