import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StatusBar,
  
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { images } from '../../../assets/images';
import { useTranslationData } from '../../../hooks/userTranslationData'; // Import the custom hook
import { useTranslation } from 'react-i18next';

import { useCouponsData, usePeopleData } from '../../../hooks/cuponTranslatedData';
import DropDownPicker from 'react-native-dropdown-picker';
import Strings from '../../../constants/strings';
import { i18n,languageResources } from '../../../localization/i18n';
import fonts from '../../../constants/fonts';



const dailyData = [
  { id: '1', date: 'FEB 1', height: 120 },
  { id: '2', date: 'FEB 2', height: 80 },
  { id: '3', date: 'FEB 3', height: 50 },
  { id: '4', date: 'FEB 4', height: 70 },
  { id: '5', date: 'FEB 5', height: 40 },
  { id: '6', date: 'FEB 6', height: 90 },
  { id: '7', date: 'FEB 7', height: 100 },
];

const weeklyData = [
  { id: '1', date: 'Week 1', height: 90 },
  { id: '2', date: 'Week 2', height: 20 },
  { id: '3', date: 'Week 3', height: 70 },
  { id: '4', date: 'Week 4', height: 80 },
];

const monthlyData = [
  { id: '1', date: 'Jan', height: 50 },
  { id: '2', date: 'Feb', height: 100 },
  { id: '3', date: 'Mar', height: 30 },
  { id: '4', date: 'Apr', height: 120 },
  { id: '5', date: 'May', height: 40 },
  { id: '6', date: 'Jun', height: 90 },
  { id: '7', date: 'Jul', height: 60 },
];

const DashboardScreen = ({ navigation, route }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const data = useTranslationData();
  const couponsData = useCouponsData();
  const { t, i18n } = useTranslation();
  const peopleData = usePeopleData();
  const [open, setOpen] = useState(false); // State to control dropdown visibility
  const [value, setValue] = useState('daily'); // State to control selected value
  const [items, setItems] = useState([
    {label: 'Daily', value: 'daily'},
    {label: 'Week', value: 'weekly'},
    {label: 'Month', value: 'monthly'},
  ]); // Items
  const [selectedPeriod, setSelectedPeriod] = useState('daily');

  const getGraphData = () => {
    switch (selectedPeriod) {
      case 'daily':
        return dailyData;
      case 'weekly':
        return weeklyData;
      case 'monthly':
        return monthlyData;
      default:
        return dailyData;
    }
  };

  const graphData = getGraphData();

  


  // Callback for viewable items
  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const [cuponActiveIndex, setCuponActiveIndex] = useState(
    route.params?.cuponActiveIndex || 0,
  );

  const [isImageBackgroundVisible, setIsImageBackgroundVisible] = useState(true);

  const handleClose = () => {
    setIsImageBackgroundVisible(false);
  };

  const handleDropdownChange = (value) => {
    setSelectedPeriod(value);
  };

  const toggleBlur = () => setIsBlurred(!isBlurred);



  const handleCuponScroll = event => {
    const screenWidth = Dimensions.get('screen').width - 20; // Frame width
    const offsetX = event.nativeEvent.contentOffset.x; // Current horizontal scroll position
    const index = Math.round(offsetX / screenWidth); // Round to get the closest index
    setCuponActiveIndex(index);
    navigation.setParams({ cuponActiveIndex: index });
  };

  useFocusEffect(
    useCallback(() => {
      if (route.params?.activeIndex !== undefined) {
        setActiveIndex(route.params.activeIndex);
      }
      if (route.params?.cuponActiveIndex !== undefined) {
        setCuponActiveIndex(route.params.cuponActiveIndex);
      }
    }, [route.params?.activeIndex, route.params?.cuponActiveIndex]),
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={[styles.bar, { height: item.height }]} />
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      {/* Appbar */}
      <View style={styles.appbarStyle}>
        <View style={styles.nameImage}>
          <View style={styles.imageAvatar}>
            <Image source={images.userImages} style={styles.imageAvatar} />
          </View>
          <Text style={styles.nameText}>{t('greetings')}</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.notificationImageContainer}>
            <Image
              source={images.notification}
              style={styles.notificationImage}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* ImageBackground with Texts and Eye Icon */}
      <ImageBackground
        source={images.cardContentImage}
        resizeMode="cover"
        style={styles.cardImage}
      >
        <TouchableOpacity onPress={toggleBlur} style={styles.eyeIconWrapper}>
          <Image
            source={!isBlurred ? images.eyeIcon : images.eyeIconHide}
            style={styles.eyeIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* FlatList with onViewableItemsChanged */}
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={item => item.key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          renderItem={({ item }) => (
            <View style={styles.textContainer}>
              <View style={styles.textWrapper}>
                <Text style={styles.cardMainText}>{item.mainHeading}</Text>
                <Text style={styles.cardSubText}>{item.earned}</Text>
              </View>
            </View>
          )}
          style={styles.flatList1}
        />

        <View style={styles.paginationWrapper}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
            />
          ))}
        </View>

        {isBlurred && (
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={15}
            reducedTransparencyFallbackColor="white"
            pointerEvents="none"
          />
        )}
      </ImageBackground>

      <View style={styles.peopleRow}>
        <TouchableOpacity>
          <Image
            source={images.inviteAndEarn}
            resizeMode="contain"
            style={styles.earnStyle}
          />
        </TouchableOpacity>
        <FlatList
          data={peopleData}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          style={styles.flatListStyle}
          renderItem={({ item }) => (
            <View style={styles.peopleContainer}>
              <View style={styles.peopleContainer2}>
                <Image
                  source={item.image}
                  style={styles.peopleImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.peopleName}>{item.name}</Text>
              <View style={styles.peopleOvalContainer}>
                <Text>{item.value}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <>
        {isImageBackgroundVisible && (
          <ImageBackground
            source={images.frame2}
            resizeMode="cover"
            style={styles.discountBannerBgImage}
          >
            <TouchableOpacity onPress={handleClose} style={styles.closeIconWrapper}>
              <Image
                source={images.crossIcon} // Add your cross icon image here
                style={styles.closeIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <FlatList
              data={couponsData}
              keyExtractor={item => item.id}
              horizontal
              pagingEnabled
              onScroll={handleCuponScroll}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <View style={styles.discountBanner}>
                  {item.image && (
                    <Image style={styles.arrow} source={item.image} />
                  )}
                  <Text style={styles.discountText(item.image)}>{item.name}</Text>
                </View>
              )}
            />

            <View style={styles.paginationCuponWrapper}>
              {couponsData.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    cuponActiveIndex === index && styles.activeDot,
                  ]}
                />
              ))}
            </View>
          </ImageBackground>
        )}
      </>

    

      <View style={styles.chartContainer}>
        <View style={styles.chartContainerHeader}>
          {/* avg and top with line graph */}
          <View style={styles.avgValueAndGraph}>
            <View style={styles.topGraphColumn}>
              <Text style={styles.topGraphValue}>
                $62 <Text style={styles.topGraphText}>Top</Text>
              </Text>

              <View style={styles.graphBg}>
                <View style={styles.graphAbove} />
              </View>
            </View>
            <View style={styles.topGraphColumn}>
              <Text style={styles.topGraphValue}>
                $49 {''}
                <Text style={styles.topGraphText}>Avg.</Text>
              </Text>
              <View style={styles.graphBg}>
                <View style={styles.graphAboveSecond} />
              </View>
            </View>
          </View>
          {/* ending of above */}

          {/* right drop down */}
          <View style={[styles.DropDownContainer, {width: 150,}]}>
            <DropDownPicker
              open={open}
              value={selectedPeriod}
              items={items}
              setOpen={setOpen}
              setValue={handleDropdownChange}
              setItems={setItems}
              placeholder="Select an option"
              dropdownPosition="bottom"
               theme="DARK"
              containerStyle={{
                width: 'auto',
                position: 'absolute',
                zIndex: 5,
                borderColor: 'transparent', // Optional: Remove border
              }}
              style={{
                backgroundColor: '#2F455C',
                borderColor: 'transparent',
                //height: 22,
                // padding: 0,
                borderRadius: 16,
               // backgroundColor: 'red',
                flexDirection: 'row',
                 minHeight: 15,
                 maxHeight: 25,
               // maxHeight: 50,
               justifyContent: 'center',
                alignItems: 'center',
               paddingHorizontal: 12,
              }}
              textStyle={{
                color: '#FFFFFF', // Color of the text inside the dropdown
                fontSize: 14, // Adjust font size if needed
                fontFamily: fonts.SF_PRO_TEXT.inter.Regular
              }}
              dropDownContainerStyle={{
                backgroundColor: '#2F455C',
                borderColor: 'transparent', // Optional: Remove border
                borderRadius: 10,
                //  position: 'absolute',
                // zIndex: 5
                position: 'absolute',
                zIndex: 5,
              }}
            />
          </View>
        </View>

        {/* bar graphs */}

        <View style={styles.barGraphConatiner}>
          <FlatList
            data={graphData}
            renderItem={renderItem}
            keyExtractor={item => item.date}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>

      {/* main container ending*/}
    </View>
  );
};

export default DashboardScreen;
