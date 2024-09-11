import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { images } from '../../assets/images'
import Strings from '../../constants/strings'
import { rwp, rhp } from '../../constants/dimensions'
import MenuTile from '../../components/menuTile'

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={images.menuTopBgImage} resizeMode='cover' style={styles.topBgImage} >

        <View style={styles.appBar}>
          <View style={styles.imageAvatar}>
            <Image source={images.userImages} style={styles.imageAvatar} />
          </View>

          <TouchableOpacity>
            <View style={styles.notificationImageContainer}>
              <Image
                source={images.notification}
                style={styles.notificationImage}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.menuIconBgContainer}>
        <Image source={images.menuIconFilled} style={styles.menuFilledImage} />

      </View>
      <View style={styles.menuTextBgContainer}><Text style={styles.menuText}>{Strings.menu} </Text></View>
     

      <View style={styles.MenuContent}>
      <ScrollView 
     showsVerticalScrollIndicator={false}
      >
        <MenuTile
          iconSource={images.personalDetailIcon}
          label={Strings.personalDetails}
          onPress={() => {
            // Define onPress action here
          }}
        />
          <MenuTile
          iconSource={images.addressIcon}
          label={Strings.address}
          onPress={() => {
            // Define onPress action here
          }}
        />
          <MenuTile
          iconSource={images.bankIcon}
          label={Strings.bankAccount}
          onPress={() => {
            // Define onPress action here
          }}
        />
          <MenuTile
          iconSource={images.securityIcon}
          label={Strings.passwordAndSecurity}
          onPress={() => {
            // Define onPress action here
          }}
        />
         <MenuTile
          iconSource={images.languageIcon}
          label={Strings.languageAndCurrency}
          onPress={() => {
            // Define onPress action here
          }}
        />
         <MenuTile
          iconSource={images.usergGuideIcon}
          label={Strings.userGuide}
          onPress={() => {
            // Define onPress action here
          }}
        />
        <MenuTile
          iconSource={images.supportIcon}
          label={Strings.support}
          onPress={() => {
            // Define onPress action here
          }}
        />
        <MenuTile
          iconSource={images.termsIcon}
          label={Strings.termsAndConditions}
          onPress={() => {
            // Define onPress action here
          }}
        />
        <MenuTile
          iconSource={images.policyIcon}
          label={Strings.privacyPolicy}
          onPress={() => {
            // Define onPress action here
          }}
        />
        <MenuTile
          iconSource={images.logoutIcon}
          label={Strings.logout}
          onPress={() => {
            // Define onPress action here
          }}
        />
       </ScrollView>
      </View>
     
    </View>
  )
}
export default MenuScreen