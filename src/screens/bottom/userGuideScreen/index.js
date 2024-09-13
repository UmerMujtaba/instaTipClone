import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { images } from '../../../assets/images';

import styles from './styles';
import { hp, rhp, rwp, wp } from '../../../constants/dimensions';
import CustomDropDownPicker from '../../../components/customDropDownPicker';
import fonts from '../../../constants/fonts';
import Tabs from '../../../components/bottomTab';


const UserGuideScreen = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    return (
        <View style={styles.container}>
          

                <ImageBackground source={images.menuTopBgImage} resizeMode='cover' style={styles.topBgImage}>
                    <View style={styles.appBar}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#2F455C',
                                width: 48,
                                height: 48,
                                marginLeft: 5,
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={images.backIcon}
                                style={{ width: 10.26, height: 20 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.editIconContainer}>
                                <Image source={images.closeIcon} style={styles.editImage} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                <View style={styles.menuIconBgContainer}>
                    <Image source={images.usergGuideIcon} style={styles.menuFilledImage} />
                </View>
                <View style={styles.menuTextBgContainer}>
                    <Text style={styles.menuText}>{t('userGuide')}</Text>
                </View>

                <View style={{ height: 450, width: 'auto', marginLeft: 10, marginRight: 10, marginTop: '6%' }}>
                <ScrollView
                
                showsVerticalScrollIndicator={false}
                >
                    <Image source={images.guideTag1} resizeMode='contain' style={{ width: 340, height: 47.76,marginTop:10  }} />
                    <Text style={{ marginTop: 10, fontFamily: fonts.SF_PRO_TEXT.inter.Medium, fontSize: 18 ,color: 'white'}}>
                        Ensure your QR Card is Visible to Customers
                    </Text>
                    <Text style={{ marginTop: 10, fontFamily: fonts.SF_PRO_TEXT.inter.Regular, fontSize: 14, color: 'white'}}>
                        Make sure your QR card is displayed to your customers at all times. No need to wait for customers to ask present it with the check.
                        <Text style={{ color: '#29E2E0' }}>
                            Before you start using InstaTip ask your supervisor.
                        </Text>
                    </Text>
                    
                   

                    <Image source={images.guideTag2} resizeMode='contain' style={{ width: 340, height: 47.76,marginTop:10 }} />
                    <Text style={{ marginTop: 10, fontFamily: fonts.SF_PRO_TEXT.inter.Medium, fontSize: 18,textAlign: 'center',color: 'white' }}>
                    Follow your Friends and Competecolor
                    </Text>
                    <Text style={{ marginTop: 10, fontFamily: fonts.SF_PRO_TEXT.inter.Regular, fontSize: 14,color: 'white' }}>
                       Join the friendly competition with your peers, climb the ranks and strive for excellence. Keep pushing yourself to be better, and watch your tips soar to new heights.
                    </Text>

                    <Image source={images.guideTag3} resizeMode='contain' style={{ width: 340, height: 47.76,marginTop:10  }} />
                    <Text style={{ marginTop: 10, fontFamily: fonts.SF_PRO_TEXT.inter.Medium, fontSize: 18,textAlign: 'center',color: 'white' }}>
                    Introduce InstaTip and Secure Passive Income
                    </Text>
                    <Text style={{ marginTop: 10, fontFamily: fonts.SF_PRO_TEXT.inter.Regular, fontSize: 14, color: 'white'}}>
                    Be proactive! Search and invite new members to InstaTip, unlocking guaranteed  passive income for yourself. Remember, one invite can translate into a lifetime of additional earnings. Small changes add up faster than you think.
                    </Text>
                    
                    <Image source={images.guideTag4} resizeMode='contain' style={{ width: 340, height: 47.76,marginTop:10  }} />
                    <Text style={{ marginTop: 10, fontFamily: fonts.SF_PRO_TEXT.inter.Medium, fontSize: 18,textAlign: 'center',color: 'white' }}>
                    Increase Tips by up to 70%
                    </Text>
                    <Text style={{ marginTop: 10, fontFamily: fonts.SF_PRO_TEXT.inter.Regular, fontSize: 14, color: 'white'}}>
                    Your success is in the details. Unlock your full potential to increase tips by utilizing all the features of the InstaTip app. It equips you with everything you need to exceed your expectations and outperform your peers.
                    </Text>
                    

                    <Image source={images.guideTag5} resizeMode='contain' style={{ width: 340, height: 47.76,marginTop:10  }} />
                    <Text style={{ marginTop: 10, fontFamily: fonts.SF_PRO_TEXT.inter.Medium, fontSize: 18,textAlign: 'center',color: 'white' }}>
                    Open Revolut Acccount with One Click 
                    </Text>
                    <Text style={{ marginTop: 10, fontFamily: fonts.SF_PRO_TEXT.inter.Regular, fontSize: 14, color: 'white'}}>
                    InstaTip is partnered with leading digital bank Revolut. It covers currency exchange, peer-to-peer payments, budgeting tools, and cryptocurrency exchange, making it a popular choice for many. Just click "Open Revolut Account" within eWallet, receive your IBAN and easily withdraw your earnings.
                     </Text>
                    </ScrollView>
                </View>


            
           <Tabs/>
        </View>


    )
}

export default UserGuideScreen;