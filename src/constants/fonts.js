import { Platform } from 'react-native';

export default {
  SF_PRO_TEXT: {
    ...Platform.select({
      ios: {
        montserrat: {
          Regular: "Montserrat-Regular"
        },
        Outfit: {
          Bold: 'Outfit-Bold',
          Light: 'Outfit-Light',
          Regular: 'Outfit-Regular',
          SemiBold: 'Outfit-SemiBold',
          medium: 'Outfit-Medium',
          ExtraBold: 'Outfit-ExtraBold',
        },
        inter: {
          Black: 'Inter-Black',
          Bold: 'Inter-Bold',
          ExtraBold: 'Inter-ExtraBold',
          Light: 'Inter-Light',
          Medium: 'Inter-Medium',
          Regular: 'Inter-Regular',
          SemiBold: 'Inter-SemiBold',
          Thin: 'Inter-Thin'
        },
        Poppins: {
          // ThinItalic: 'Poppins-ThinItalic',
          Light: 'Poppins-Light',
          Bold: 'Poppins-Bold',
          // Heavy: 'Poppins-Heavy',
          // BoldItalic: 'Poppins-BoldItalic',
          SemiBold: 'Poppins-SemiBold',
          // ExtraBold: 'Poppins-ExtraBold',
          // MediumItalic: 'Poppins-MediumItalic',
          // Black: 'Poppins-Black',
          // ExtraBoldItalic: 'Poppins-ExtraBoldItalic',
          // RegularItalic: 'Poppins-RegularItalic',
          // UltraLight: 'Poppins-UltraLight',
          Medium: 'Poppins-Medium',
          // HeavyItalic: 'Poppins-HeavyItalic',
          // SemiBoldItalic: 'Poppins-SemiBoldItalic',
          // UltraLightItalic: 'Poppins-UltraLightItalic',
          // BlackItalic: 'Poppins-BlackItalic',
          Regular: 'Poppins-Regular',
          // Thin: 'Poppins-Thin',
          // LightItalic: 'Poppins-LightItalic',
        },
      },
      android: {
        montserrat: {
          Regular: "Montserrat-Regular"
        },
        Outfit: {
          Bold: 'Outfit-Bold',
          Light: 'Outfit-Light',
          Regular: 'Outfit-Regular',
          SemiBold: 'Outfit-SemiBold',
          medium: 'Outfit-Medium',
          ExtraBold: 'Outfit-ExtraBold',
        },
        inter: {
          Black: 'Inter-Black',
          Bold: 'Inter-Bold',
          ExtraBold: 'Inter-ExtraBold',
          Light: 'Inter-Light',
          Medium: 'Inter-Medium',
          Regular: 'Inter-Regular',
          SemiBold: 'Inter-SemiBold',
          Thin: 'Inter-Thin'
        },
        Poppins: {
          // ThinItalic: 'Poppins-ThinItalic',
          Light: 'Poppins-Light',
          Bold: 'Poppins-Bold',
          // Heavy: 'Poppins-Heavy',
          // BoldItalic: 'Poppins-BoldItalic',
          SemiBold: 'Poppins-SemiBold',
          // ExtraBold: 'Poppins-ExtraBold',
          // MediumItalic: 'Poppins-MediumItalic',
          // Black: 'Poppins-Black',
          // ExtraBoldItalic: 'Poppins-ExtraBoldItalic',
          // RegularItalic: 'Poppins-RegularItalic',
          // UltraLight: 'Poppins-UltraLight',
          Medium: 'Poppins-Medium',
          // HeavyItalic: 'Poppins-HeavyItalic',
          // SemiBoldItalic: 'Poppins-SemiBoldItalic',
          // UltraLightItalic: 'Poppins-UltraLightItalic',
          // BlackItalic: 'Poppins-BlackItalic',
          Regular: 'Poppins-Regular',
          // Thin: 'Poppins-Thin',
          // LightItalic: 'Poppins-LightItalic',
        },
      },
    }),
  },
};

const MOB_TAB_RATIO = 1.4;
export const fontWeight = (weight) => {
  let size = isPAD ? Math.floor(weight * MOB_TAB_RATIO) : weight;
  return size;
};