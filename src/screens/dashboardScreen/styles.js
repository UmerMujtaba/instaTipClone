import {StyleSheet, Dimensions} from 'react-native';
// import fonts from '../../constants/fonts';

import {rfs, rwp, wp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';


export default StyleSheet.create({
  container: {
    backgroundColor: '#213142',
    flex: 1,
  },
  appbarStyle: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    //backgroundColor: 'red',
    paddingLeft: 10,
  },
  imageAvatar: {
    borderRadius: 50,
    width: rwp(52),
    height: rwp(52),
    backgroundColor: '#FFFFFF',
  },
  nameImage: {
    flexDirection: 'row',
  },
  nameText: {

   fontFamily: fonts.SF_PRO_TEXT.inter.Regular,
    fontSize: rfs(24),
    color: '#FFFFFF',
    marginLeft: 10,
    alignSelf: 'center',
    // marginTop: 10,
  },
  notificationImage: {
    width: rwp(21.01),
    height: rwp(23),
    resizeMode: 'contain',
  },

  notificationImageContainer: {
    backgroundColor: '#2F455C',
    width: rwp(52),
    height: rwp(52),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardImage: {
    marginLeft: 10,
    marginTop: 10,
    width: wp(95),
    //backgroundColor: 'red',
    borderRadius: 18,
    height: rwp(156),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIconWrapper: {
    position: 'absolute',
    top: 5,
    right: 10,
    zIndex: 10,
  },
  eyeIcon: {
    width: rwp(26),
    height: rwp(26),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  flatList1: {
    width: wp(95), // Same as the ImageBackground width
    height: rwp(130), // Same as the ImageBackground height
    alignSelf: 'center',
    //justifyContent: 'center',
  },
  textContainer: {
    width: wp(95), // Ensure each FlatList item fits the background width
    height: rwp(132), // Ensure height matches the background
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    alignItems: 'center',
  },
  cardMainText: {
    fontSize: rfs(18),
    color: '#CBD5E1',
    fontFamily: fonts.SF_PRO_TEXT.inter.Regular,
  },
  cardSubText: {
    fontSize: rfs(48),
    color: '#FFFFFF',
    marginTop: 8,
    fontFamily: fonts.SF_PRO_TEXT.inter.SemiBold,
  },
  paginationWrapper: {
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp(100),
  },
  dot: {
    width: rwp(6.1),
    height: rwp(6),
    borderRadius: 4,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#1DCDFE',
  },

  peopleRow: {
    // backgroundColor: 'red',
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  earnStyle: {
    width: rwp(82),
    height: rwp(124),
  },
  listContainer: {
    // paddingHorizontal: 10, //
  },
  peopleContainer: {
    width: rwp(80),
    height: rwp(120),
    alignItems: 'center',
  },
  peopleContainer2: {
    borderRadius: 50,
    backgroundColor: '#2F455C',
    height: rwp(65),
    width: rwp(65),
    alignItems: 'center',
    justifyContent: 'center',
  },
  peopleImage: {
    height: rwp(24),
    width: rwp(24),
  },
  peopleName: {
    color: '#FFFFFF',
    fontSize: rfs(16),
    marginTop: 5,
    fontFamily: fonts.SF_PRO_TEXT.inter.Regular,
    opacity: 0.5,
  },
  peopleOvalContainer: {
    marginTop: 5,
    width: rwp(57),
    height: rwp(19),
    borderRadius: 40,
    backgroundColor: '#2F455C',
    alignItems: 'center',
    
  },
  flatListStyle: {
    marginLeft: 10,
    flex: 1,
  },

  discountBannerBgImage: {
    height: rwp(110),
    width: Dimensions.get('screen').width - 20,
    alignSelf: 'center',
  },

  arrow: {
    marginTop: 2,
    height: rwp(78),
    width: rwp(78),
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
    fontFamily: fonts.SF_PRO_TEXT.inter.Regular,
    fontSize: rfs(21),
    textAlign: 'center',
    color: '#FFFFFF',
  }),

  paginationCuponWrapper: {
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp(90),
  },
  EarningText: {
    position: 'absolute',
    top: '38%',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    zIndex: 1,
    fontFamily: fonts.SF_PRO_TEXT.inter.Regular,
  },
  closeIconWrapper: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 10, // Ensure it's on top
  },
  closeIcon: {
    width: rwp(20),
    height: rwp(20),
    // transform: [{ translateX: -10}] 
  },


  graphImageBg: {
    width: wp(100), // Set width to 90% of the screen width
    height: rwp(225),
  },







  // chartContainerHeader: {
  //   flexDirection: 'row',
  //   //backgroundColor: 'skyblue',
  //   width: 'auto',
  //   height: rwp(45),
  //   justifyContent: 'space-between',
  //   //marginTop: 10,
  // },

  // avgValueAndGraph: {
  //   //backgroundColor: 'green',
  //   width: rwp/2,
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   flexDirection: 'row',
  // },

  // topGraphColumn: {
  //   //backgroundColor: 'brown',
  //   width: 60,
  //   flexDirection: 'column',
  // },

  // topGraphValue: {
  //   fontFamily: fonts.SF_PRO_TEXT.inter.ExtraBold,
  //   //fontSize: 15,
  //   //textAlign: 'center',
  // },
  // topGraphText: {
  //   fontFamily: fonts.SF_PRO_TEXT.Outfit.Regular,
  //   //fontSize: 15,
  // },
  // graphBg: {
  //   marginTop: 5,
  //   backgroundColor: '#2F455C',
  //   width: 'auto',
  //   height: 5,
  //   borderRadius: 8,
  // },
  // graphAbove: {
  //   backgroundColor: '#29E2E0',
  //   width: 50,
  //   height: 5,
  //   borderRadius: 8,
  // },
  // graphAboveSecond: {
  //   backgroundColor: '#29E2E0',
  //   width: 30,
  //   height: 5,
  //   borderRadius: 8,
  // },
  // DropDownContainer: {
  //   // backgroundColor: 'orange',
  //   // width: width / 3,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 45,
  // },
  // barGraphConatiner: {
  //   backgroundColor: 'red',
  //   // width: 'auto',
  //   height: 160,
  //  // flexDirection: 'row',
  // },
  // Textcontainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  // //graph flat list
  // chartContainer: {
  //   marginTop: 10,
  //   marginLeft: 10,
  //   height: rwp(215),
  //   width: rwp - 20,
  //   //backgroundColor: 'pink',
  //   borderRadius: 12,
  // },

  // flatListContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   alignItems: 'flex-end', // Align items to the bottom if needed
  // },
  // itemContainer: {
  //   flexDirection: 'column',
  //   paddingLeft: 10,
  //   //width: 32,
  //   //height: 'auto',
  //   justifyContent: 'flex-end',
  // },
  // bar: {
  //   backgroundColor: '#29E2E0',
  //   width: rwp(14),
  //   alignSelf: 'center',
  //   borderRadius: 8,
  // },
  // dateText: {
  //   fontSize: 13,
  //   textAlign: 'center',
  //   marginTop: 5,
  // },
  // separator: {
  //   width: 16, // Adjust the spacing between bars here
  // },
});
