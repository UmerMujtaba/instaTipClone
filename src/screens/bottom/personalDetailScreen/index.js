import { View, Text, Image, TextInput, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import AppBarWithMenu from '../../../components/appBar'
import { images } from '../../../assets/images'
import DatePicker from 'react-native-date-picker';
import { useTranslation } from 'react-i18next';
import CustomTextInput from '../../../components/textFields';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input'
import DocumentPicker from 'react-native-document-picker';



const PersonalDetailsScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [languageValue, setLanguageValue] = useState(null);
  const [name, setName] = useState('');
  const [surName, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneCountryCode, setPhoneCountryCode] = useState('US');
  const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = useRef(null);
  const [country, setCountry] = useState(initialCountry);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [documentName, setDocumentName] = useState('');

  const initialCountry = {
    cca2: 'GB', // UK country code
    name: 'United Kingdom', // Country name
    callingCode: ['44'], // UK calling code
  };



  // Handle country selection
  useEffect(() => {
    // Set initial country to UK
    setCountry(initialCountry);
  }, []);


  useEffect(() => {
    // initial value based on the current language
    setLanguageValue(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };


  const handleConfirm = (selectedDate) => {
    setDate(selectedDate);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const formatDate = (date) => {
    if (!date) return '';
    const day = (`0${date.getDate()}`).slice(-2);
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleCountrySelect = (country) => {
    setPhoneCountryCode(country.cca2);
    const newPhoneNumber = `+${country.callingCode[0]}`;
    setPhoneNumber(newPhoneNumber);
    if (phoneInput.current) {
      phoneInput.current.selectCountry(country.cca2.toLowerCase());
      phoneInput.current.setValue(newPhoneNumber);
    }
    setShowPhoneCountryPicker(false);
  };


  const handleSelectCountry = (selectedCountry) => {
    setCountry(selectedCountry);
    setShowCountryPicker(false); // Close  picker after selection
  };

  // Format display text 
  const displayText = country ? country.name : initialCountry.name;


  const handleDocumentSelect = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setDocumentName(res[0].name); // Set the document name in the state
      Alert.alert('Document Selected', `Selected document: ${res[0].name}`);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Handle cancel action
        console.log('User canceled document picker');
      } else {
        throw err;
      }
    }
  };

  return (

    <View style={{ backgroundColor: '#213142', flex: 1 }}>
      <AppBarWithMenu
        onBackPress={() => navigation.goBack()}
        onEditPress={() => console.log("Edit Pressed")}
        editIcon={images.editIcon}
        menuIcon={images.userDetailIcon}
        menuText={t('personalDetails')}
      />

      <ScrollView>
        <View style={{ marginLeft: 10, marginRight: 10, height: 600, marginTop: 10 }}>



          {/* name and surname */}
          <View style={{ width: 'auto', height: 80, flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ width: 160, height: 60, flexDirection: 'column' }}>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                <Text style={{ color: '#97A2AD', fontSize: 14, paddingLeft: 10, marginBottom: 5 }}>Name </Text>
              </View>
              <CustomTextInput style={{ paddingHorizontal: 10, }}
                value={surName}
                onChangeText={setSurname}
                placeholder="Name"
                imageSource={images.userOutlinedIcon}
                keyboardType="default"

              />
            </View>

            <View style={{ width: 160, height: 60, flexDirection: 'column' }}>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                <Text style={{ color: '#97A2AD', fontSize: 14, paddingLeft: 10, marginBottom: 5 }}>Surname </Text>
              </View>
              <CustomTextInput style={{ paddingHorizontal: 10, }}
                value={name}
                onChangeText={setName}
                placeholder="Surname"
                imageSource={images.userOutlinedIcon}
                keyboardType="default"

              />
            </View>

          </View>


          {/* gender and date of birth  */}

          <View style={{ width: 'auto', height: 80, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: 160, height: 60, flexDirection: 'column' }}>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                <Text style={{ color: '#97A2AD', fontSize: 14, paddingLeft: 10, marginBottom: 5 }}>Gender </Text>
              </View>
              <CustomTextInput style={{ paddingHorizontal: 10, }}
                value={gender}
                onChangeText={setGender}
                placeholder="Gender"
                imageSource={images.userOutlinedIcon}
                keyboardType="default"

              />
            </View>

            <View style={{ width: 160, height: 60, flexDirection: 'column' }}>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                <Text style={{ color: '#97A2AD', fontSize: 14, paddingLeft: 10, marginBottom: 5 }}>Date of birth </Text>
              </View>
              <CustomTextInput style={{ paddingHorizontal: 10, }}

                value={date ? formatDate(date) : ''}
                onChangeText={() => { }}
                placeholder="dd/mm/yyyy"
                keyboardType=""
                suffixIconStyle={{ width: 21, height: 21 }}
                eye
                eyePress={() => setOpen(true)}
                eyeSource={images.calendarIcon}
              />
              <DatePicker
                modal
                open={open}
                date={date || new Date()}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                maximumDate={new Date()}
                locale="en"
              />
            </View>

          </View>


          {/* Nationality */}


          <View style={{ width: 'auto', height: 50, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
              <Text style={{ color: '#97A2AD', fontSize: 14, paddingLeft: 10, marginBottom: 5 }}>Nationality </Text>
            </View>

            <TouchableOpacity
              onPress={() => setShowCountryPicker(true)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 8,
                paddingHorizontal: 16,
                height: 45,
                backgroundColor: '#2F455C',
              }}
            >
              {/* Display the selected country flag */}
              {country && (
                <Image
                  source={{ uri: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png` }} // Flag image URL
                  style={{
                    width: 30,
                    height: 20,
                    marginRight: 10,
                  }}
                />
              )}

              {/* Country name display */}
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 16, color: 'white',
                  // placeholder: "Select Country"
                }}
                value={displayText}
                editable={false}
              />
            </TouchableOpacity>

            {/* Country Picker Modal */}
            <CountryPicker
              visible={showCountryPicker}
              withFilter
              withFlag
              withCallingCode
              countryCode={country ? country.cca2 : initialCountry.cca2}
              onSelect={handleSelectCountry}
              onClose={() => setShowCountryPicker(false)}
              containerButtonStyle={{ display: 'none' }}
            />

          </View>


          {/* phone number */}

          <View style={{ width: 'auto', height: 90, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
              <Text style={{ color: '#97A2AD', fontSize: 14, paddingLeft: 10, marginBottom: 5, marginTop: 30 }}>Phone </Text>
            </View>

            <View style={{
              justifyContent: 'center',
              marginBottom: 5,
              borderRadius: 8,
              paddingHorizontal: 16,
              height: 45,
              backgroundColor: '#2F455C',
              paddingRight: 10,
            }}>
              <TouchableWithoutFeedback onPress={() => setShowPhoneCountryPicker(true)}>
                <View>
                  <PhoneInput
                    ref={phoneInput}
                    style={{ backgroundColor: 'transparent', width: 'auto', height: 20 }}
                    initialValue={phoneNumber}
                    initialCountry={phoneCountryCode.toLowerCase()}
                    onPressFlag={() => setShowPhoneCountryPicker(true)}
                    onChangePhoneNumber={(text) => {
                      setPhoneNumber(text);
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>

            <CountryPicker
              countryCode={phoneCountryCode}
              visible={showPhoneCountryPicker}
              onSelect={handleCountrySelect}
              onClose={() => setShowPhoneCountryPicker(false)}
              withFlagButton={false}
              withFilter
            />

            {/* <Text style={{ color: 'red', alignSelf: 'center' }}>{phoneInput.current?.isValidNumber() ? "" : "Please enter a valid number"}</Text> */}
          </View>

          {/* email */}
          <View style={{ width: 'auto', height: 70, marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
              <Text style={{ color: '#97A2AD', fontSize: 14, paddingLeft: 10, marginBottom: 5, }}>Email </Text>
            </View>

            <CustomTextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              imageSource={images.emailIcon}
              keyboardType="email-address"
              suffixIconStyle={{ width: 24, height: 26.4 }}
              rightIcon
            />
          </View>


          {/* document */}


          <Image source={images.doumentTitle} resizeMode='cover' style={{ width: 'auto', height: 18, marginTop: 10, marginLeft: 10, marginRight: 10 }} />

          <View style={{ width: 'auto', height: 60, marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
              <Text style={{ color: '#97A2AD', fontSize: 14, paddingLeft: 10, marginBottom: 5 }}>Upload personal identity document </Text>
            </View>

            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8,
              paddingHorizontal: 10,
              height: 45,
              backgroundColor: '#2F455C',
            }}>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 16,
                  color: '#fff',
                }}
                placeholder="Add document"
                placeholderTextColor="#9A9A9A"
                value={documentName}
                onChangeText={setDocumentName}
                editable={false} // Make it non-editable because the upload button is used to select the document
              />

              {/* Upload icon button */}
              <TouchableOpacity onPress={handleDocumentSelect} style={{
                marginLeft: 10,
                padding: 5,
              }}>
                <Image source={images.uploadIcon} style={{
                  width: 24,
                  height: 24,
                  tintColor: '#29E2E0',
                }} />
              </TouchableOpacity>
            </View>

          </View>

        </View>
        {/* ending of body */}
      </ScrollView>




    </View>
  )
}
export default PersonalDetailsScreen