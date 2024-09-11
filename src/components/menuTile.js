import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { images } from '../../assets/images'; // Adjust the import based on your folder structure
import { rfs, rhp, rwp } from '../constants/dimensions';
import fonts from '../constants/fonts';

const MenuTile = ({ iconSource, label, onPress }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <TouchableOpacity style={styles.menuButton} onPress={onPress}>
                <Image source={iconSource} style={styles.iconStyle} />
                <Text style={styles.labelStyle}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menuButton: {
        flexDirection: 'row',
        alignContent: 'center',

    },
    iconStyle: {
        width: rwp(25.05), // Adjust as necessary
        height: rhp(24), // Adjust as necessary
    },
    labelStyle: {
        //marginTop: 10,
        fontFamily: fonts.SF_PRO_TEXT.inter.Regular,
        fontSize: rfs(19),
        color: 'white',
        alignSelf: 'center',
        marginHorizontal: 20,
        textAlign: 'center'
    },
});

export default MenuTile;
