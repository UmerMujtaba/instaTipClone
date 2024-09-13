import { StyleSheet } from "react-native";
import { hp, rfs, rwp, rhp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#213142',
        //paddingHorizontal:16,
    },
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
    imageAvatar: {
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

    notificationImage: {
        width: rwp(21.01),
        height: rwp(23),
        resizeMode: 'contain',
    },

    notificationImageContainer: {
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
    MenuContent: {
        width: rwp(340),
        height: rhp(520),
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '3%'
    }
});