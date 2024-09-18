import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBarWithMenu from '../../../components/appBar'
import { images } from '../../../assets/images'
import DatePicker from 'react-native-date-picker';
import { useTranslation } from 'react-i18next';
import CustomTextInput from '../../../components/textFields';



const PersonalDetailsScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [languageValue, setLanguageValue] = useState(null);
  const [name, setName] = useState('');
  const [surName, setSurname] = useState('');
  const [gender, setGender] = useState('');



  useEffect(() => {
    // initial value based on the current language
    setLanguageValue(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);

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

  return (

    <View style={{ backgroundColor: '#213142', flex: 1 }}>
      <AppBarWithMenu
        onBackPress={() => navigation.goBack()}
        onEditPress={() => console.log("Edit Pressed")}
        editIcon={images.editIcon}
        menuIcon={images.userDetailIcon}
        menuText={t('personalDetails')}
      />


      <View style={{ marginLeft: 10, marginRight: 10, height: 400, marginTop: 10 }}>



        <View style={{ width: 'auto', height: 80, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
          <View style={{ width: 160, height: 60, flexDirection: 'column' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
              <Text style={{ color: 'white', fontSize: 14, paddingLeft: 10, marginBottom: 5 }}>Name </Text>
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
              <Text style={{ color: 'white', fontSize: 14, paddingLeft: 10, marginBottom: 5 }}>Surname </Text>
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




        <View style={{ width: 'auto', height: 80, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: 160, height: 60, flexDirection: 'column' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
              <Text style={{ color: 'white', fontSize: 14, paddingLeft: 10, marginBottom: 5 }}>Gender </Text>
            </View>
            <CustomTextInput style={{ paddingHorizontal: 10, }}
              value={gender}
              onChangeText={setGender}
              // onBlur={handleBlur('name')}
              placeholder="Gender"
              imageSource={images.userOutlinedIcon}
              keyboardType="default"

            />
          </View>

          <View style={{ width: 160, height: 60, flexDirection: 'column' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
              <Text style={{ color: 'white', fontSize: 14, paddingLeft: 10, marginBottom: 5 }}>Date of birth </Text>
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


      </View>


    </View>
  )
}
export default PersonalDetailsScreen