import React, {useState, useCallback,useRef} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StatusBar
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';   
import {images} from '../../assets/images';
import Strings from '../../constants/strings';
import { useTranslationData } from '../../hooks/userTranslationData'; // Import the custom hook
import { useTranslation } from 'react-i18next';
import i18next, { languageResources } from '../../../src/localization/i18n'
import { useCouponsData, usePeopleData } from '../../hooks/cuponTranslatedData';


const graphData = [
  {id: '1', date: 'FEB 1', height: 120},
  {id: '2', date: 'FEB 2', height: 80},
  {id: '3', date: 'FEB 3', height: 50},
  {id: '4', date: 'FEB 4', height: 70},
  {id: '5', date: 'FEB 5', height: 40},
  {id: '6', date: 'FEB 6', height: 90},
  {id: '7', date: 'FEB 7', height: 100},
];

const DashboardScreen = ({navigation, route}) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const data = useTranslationData();
  const couponsData = useCouponsData();
  const { t, i18n } = useTranslation();
  const peopleData = usePeopleData();


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
  
  // const [open, setOpen] = useState(false); // State to control dropdown visibility
  // const [value, setValue] = useState('daily'); // State to control selected value
  // const [items, setItems] = useState([
  //   {label: 'Daily', value: 'daily'},
  //   {label: 'Weekly', value: 'weekly'},
  //   {label: 'Monthly', value: 'monthly'},
  // ]); // Items

  const toggleBlur = () => setIsBlurred(!isBlurred);

  // const handleScroll = event => {
  //   const index = Math.floor(event.nativeEvent.contentOffset.x / width);
  //   setActiveIndex(index);
  //   navigation.setParams({activeIndex: index});
  // };

  const handleCuponScroll = event => {
    const screenWidth = Dimensions.get('screen').width - 20; // Frame width
    const offsetX = event.nativeEvent.contentOffset.x; // Current horizontal scroll position
    const index = Math.round(offsetX / screenWidth); // Round to get the closest index
    setCuponActiveIndex(index);
    navigation.setParams({cuponActiveIndex: index});
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

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={[styles.bar, {height: item.height}]} />
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
          renderItem={({item}) => (
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

      {/* <View style={styles.chartContainer}>
        <View style={styles.chartContainerHeader}>
          {/* avg and top with line graph */}
      {/* <View style={styles.avgValueAndGraph}>
            <View style={styles.topGraphColumn}>
              <Text style={styles.topGraphValue}>
                $62 <Text style={styles.topGraphText}>Top</Text>
              </Text> */}

      {/* <View style={styles.graphBg}>
                <View style={styles.graphAbove} />
              </View>
            </View>
            <View style={styles.topGraphColumn}>
              <Text style={styles.topGraphValue}>
                $49 {''} */}
      {/* <Text style={styles.topGraphText}>Avg.</Text>
              </Text>
              <View style={styles.graphBg}>
                <View style={styles.graphAboveSecond} />
              </View>
            </View>
          </View> */}
      {/* ending of above */}

      {/* right drop down */}
      {/* <View style={[styles.DropDownContainer, {width: width / 3}]}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select an option"
              dropdownPosition="bottom"
              containerStyle={{
                width: '70%',
                borderColor: 'transparent', // Optional: Remove border
              }} */}
      {/* style={{
                backgroundColor: '#2F455C',
                borderColor: 'transparent',
                height: 25,
                borderRadius: 16,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
              textStyle={{
                color: 'lightgrey', // Color of the text inside the dropdown
                fontSize: 14, // Adjust font size if needed
              }}
              dropDownContainerStyle={{
                backgroundColor: '#2F455C',
                borderColor: 'transparent', // Optional: Remove border
                borderRadius: 16,
              }}
            />
          </View> */}
      {/* </View> */}

      {/* bar graphs */}

      {/* <View style={styles.barGraphConatiner}> */}

      <View style={{position: 'relative', alignItems: 'center'}}>
        {/* Text Overlay */}
        <Text
          style={
            styles.EarningText
            
          }>
         {Strings.youWillFindYourDetails}
          <Text style={{color: '#29E2E0'}}>{Strings.here}</Text>.
        </Text>

        {/* Image */}
        <Image
          source={require('../../assets/images/data.png')}
          resizeMode="contain"
          style={
            styles.graphImageBg
            
          }
        />
      </View>

      {/* <FlatList
            data={graphData}
            renderItem={renderItem}
            keyExtractor={item => item.date}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          /> */}
      {/* </View> */}
      {/* // </View> */}

      {/* main container ending*/}
    </View>
  );
};

export default DashboardScreen;
