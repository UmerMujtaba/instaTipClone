import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import fonts from "../constants/fonts";


const GradientButton = ({ onPress, buttonText, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]} onPress={onPress}>
      <LinearGradient
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 1.0, y: 0.5 }}
        locations={[0, 0.5]}
        colors={['#34F5C5', '#1DCDFE']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
  buttonText: {
    color: '#213142',
    //fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.inter.SemiBold,
  },
  linearGradient: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    height: '100%',
  },
});

export default GradientButton;