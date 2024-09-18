import { StyleSheet, Dimensions } from 'react-native';
import fonts from '../../../constants/fonts';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: '#213142',
        flex: 1,
    },
    mainBody: {
        marginLeft: 10,
        marginRight: 10,
        height: 600,
        marginTop: 10
    },

    nameContainer: {
        width: 'auto',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    mainContainerCol: {
        width: 160,
        height: 60,
        flexDirection: 'column'
    },
    mainContainerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    heading: {
        color: '#97A2AD',
        fontSize: 14,
        paddingLeft: 10,
        marginBottom: 5
    },
    countryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 16,
        height: 45,
        backgroundColor: '#2F455C',
    },
    flagImage: {
        width: 30,
        height: 20,
        marginRight: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 16, color: 'white',
        // placeholder: "Select Country"
    },
    phoneContainer: {
        justifyContent: 'center',
        marginBottom: 5,
        borderRadius: 8,
        paddingHorizontal: 16,
        height: 45,
        backgroundColor: '#2F455C',
        paddingRight: 10,
    },
    docImage: { width: 'auto', height: 18, marginTop: 10, marginLeft: 10, marginRight: 10 },
    docContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 45,
        backgroundColor: '#2F455C',
    },
    uploadIconStyle: {
        width: 24,
        height: 24,
        tintColor: '#29E2E0',
    }
});