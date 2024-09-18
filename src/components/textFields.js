import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  suffixIconStyle,
  style,
  onPress,
  imageSource,
  rightIcon,
  eyeSource,
  eye,
  onBlur,
  eyePress,
  keyboardType,
  editable,
  ...props
}) => {
  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        editable={editable}
      keyboardType={keyboardType}
        style={{flex: 1}}
      />
      {rightIcon && (
        <Image
          style={[styles.icon, {...suffixIconStyle}]}
          resizeMode="contain"
          source={imageSource}
        />
      )} 
      {eye && (
        <TouchableOpacity onPress={eyePress}>
          <Image
            style={[styles.icon, suffixIconStyle]}
            resizeMode="contain"
            source={eyeSource}
          /> 
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 45,
    // width:"80%",
    backgroundColor: '#2F455C',
    // alignItems: 'center',
    // marginBottom: 30
  },
});

export default CustomTextInput;
