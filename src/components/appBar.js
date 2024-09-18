import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground,StyleSheet,Text } from 'react-native';
import { images } from '../assets/images';
import { rwp,rhp,wp,hp } from '../constants/dimensions';

import { useTranslation } from 'react-i18next';
import fonts from '../constants/fonts';

const AppBarWithMenu = ({ onBackPress, editIcon = images.editIcon, onEditPress, menuIcon, menuText }) => {
  const { t } = useTranslation();

  return (
    <View>
      {/* Background Image with AppBar */}
      <ImageBackground source={images.menuTopBgImage} resizeMode='cover' style={styles.topBgImage}>
        <View style={styles.appBar}>
          {/* Back Button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#213142',
              width: 48,
              height: 48,
              marginLeft: 5,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={onBackPress}
          >
            <Image
              source={images.backIcon}
              style={{ width: 10.26, height: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* Edit Button */}
          <TouchableOpacity onPress={onEditPress}>
            <View style={styles.editIconContainer}>
              <Image source={editIcon} style={styles.editImage} />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Menu Icon and Text */}
      <View style={styles.menuIconBgContainer}>
        <Image source={menuIcon} style={styles.menuFilledImage} />
      </View>
      <View style={styles.menuTextBgContainer}>
        <Text style={styles.menuText}>{menuText}</Text>
      </View>
    </View>
  );
};

export default AppBarWithMenu;


const styles = StyleSheet.create({
    topBgImage: {
        width: rwp(392),
        height: rhp(135),
        //top:0
        // backgroundColor: 'purple',
        overflow: 'hidden'
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'green'
    },
    backIconContainer: {
        borderRadius: 50,
        width: rwp(52),
        height: rwp(52),
        backgroundColor: '#FFFFFF',
    },
    appBar: {
        //backgroundColor: 'red',
        marginTop: '12%',
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
        // justifyContent:'center',
        // alignSelf: 'center',
    },

    editImage: {
        width: rwp(21.01),
        height: rwp(23),
        resizeMode: 'contain',
    },

    editIconContainer: {
        backgroundColor: '#213142',
        width: rwp(52),
        height: rwp(52),
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',

    },
    menuIconBgContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#2F455C',
        height: rwp(100),
        width: rwp(100),
        borderRadius: 55,
        zIndex: 1,
        position: 'absolute',
        top: 70
    },
    menuFilledImage: {
        resizeMode: 'contain',
        width: rwp(60),
        height: rhp(59.69),
        alignSelf: 'center'
    },

    menuTextBgContainer: {
        //     backgroundColor: 'purple',
        marginTop: '16%',
        alignSelf: 'center',

    },

    menuText: {
        fontSize: 20,
        color: 'white',
        fontFamily: fonts.SF_PRO_TEXT.inter.Medium
    },
})