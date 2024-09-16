import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {height, width} from '../constants/dimensions';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {children} from 'react';
import WalletScreen from '../screens/bottom/walletScreen';
import QRCode from '../screens/bottom/qrCodeScreen';
import ProfileScreen from '../screens/bottom/profileScreen';

import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../assets/images';
import MenuOptionsScreen from '../screens/bottom/menuScreen';
import DashboardScreen from '../screens/bottom/dashboardScreen';
import MenuStackNavigator from '../navigator/buttomStack/menuStack';



const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
   
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',

      // ...styles.shadow,
    }}>
    <LinearGradient
      colors={['#34F5C5', '#1DCDFE']} // Adjust colors as needed
      style={{
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
      }}>
      {children}
    </LinearGradient>
  </TouchableOpacity>
);
const Tabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        width: 'auto',
        position: 'absolute',
        backgroundColor: 'red',
      },
    }}
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#2F455C',
        borderTopRightRadius: 16,
        position: 'absolute',
        borderTopLeftRadius: 16,
        borderTopWidth: 0,
        height: 65,
      
        
      },
    }}

    // tabBarActiveBackgroundColor='red'
  >
    <Tab.Screen
      name="DashboardTab"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={images.homeIcon}
              resizeMode="contain"
              style={{
                width: 20.8,
                height: 20,
                tintColor: focused ? 'white' : 'grey',
              }}
            />
            {focused && (
              <View
                style={{
                  width: 28,
                  height: 1,
                  backgroundColor: '#34F5C5', // Line color
                  marginTop: 5,
                  borderRadius: 1.5,
                }}
              />
            )}
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={WalletScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={images.walletIcon}
              resizeMode="contain"
              style={{
                width: 22.07,
                height: 20,
                tintColor: focused ? 'white' : 'grey',
              }}
            />
            {focused && (
              <View
                style={{
                  width: 28,
                  height: 1,
                  backgroundColor: '#34F5C5', // Line color
                  marginTop: 5,
                  borderRadius: 1.5,
                }}
              />
            )}
          </View>
        ),
      }}
    />

    <Tab.Screen
      name="QrCode"
      component={QRCode}
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          
          <Image
            source={images.qrCodeIcon}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              tintColor: focused ? '#213142' : '#213142',
            }}
          />
        ),
        tabBarButton: props => (
          <CustomTabBarButton {...props}>
            {/* Icon for QRCode tab */}
          </CustomTabBarButton>
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={images.userGroup}
              resizeMode="contain"
              style={{
                width: 32,
                height: 32,
                tintColor: focused ? 'white' : 'grey',
              }}
            />
            {focused && (
              <View
                style={{
                  width: 28,
                  height: 1,
                  backgroundColor: '#34F5C5', // Line color
                  marginTop: 5,
                  borderRadius: 1.5,
                }}
              />
            )}
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Menu"
      // component={MenuOptionsScreen}
      component={MenuStackNavigator}
      options={{
        headerShown: false,

        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={images.menuIcon}
              resizeMode="contain"
              style={{
                width: 24.12,
                height: 24,
                tintColor: focused ? 'white' : 'grey',
              }}
            />
            {focused && (
              <View
                style={{
                  width: 28,
                  height: 1,
                  backgroundColor: '#34F5C5', // Line color
                  marginTop: 5,
                  borderRadius: 1.5,
                }}
              />
            )}
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  shadow: {
    //shadowColor: '#7F5DF0',
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.5,
    // elevation: 5,
  },
});
export default Tabs;
