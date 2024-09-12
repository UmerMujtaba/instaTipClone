import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CustomDropDownPicker = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  onChangeValue,
  placeholder,
  containerStyle,
  style,
  textStyle,
  dropDownContainerStyle,
  selectedItemContainerStyle,
}) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={onChangeValue}
      placeholder={placeholder}
      dropdownPosition="bottom"
      theme="DARK"
      containerStyle={containerStyle}
      style={style}
      textStyle={textStyle}
      dropDownContainerStyle={dropDownContainerStyle}
      itemSeparator={false}
    
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  flagStyle: {
    width: 20,
    height: 15,
    marginRight: 10,
  },
  textStyle: {
    color: 'lightgrey',
    fontSize: 14,
  },
});

export default CustomDropDownPicker;
