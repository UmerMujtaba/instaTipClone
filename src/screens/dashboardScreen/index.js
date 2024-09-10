import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native'; // For handling screen focus
import fonts from '../../constants/fonts';
import {images} from '../../assets/images';
import DropDownPicker from 'react-native-dropdown-picker';
import {BarChart} from 'react-native-chart-kit';




const {width} = Dimensions.get('window');

const data = [
  {key: '1', earned: '$60.00', mainHeading: 'Earned Today'},
  {key: '2', earned: '$75.00', mainHeading: 'Remaining Balance'},
  {key: '3', earned: '$80.00', mainHeading: 'Tips Given'},
  {key: '4', earned: '$50.00', mainHeading: 'Earned Today'},
];

const peopleData = [
  {
    id: '1',
    name: 'Name',
    image: '../../assets/images/user3.png',
    value: '€0',
  },
  {
    id: '2',
    name: 'Name',
    image: '../../assets/images/user3.png',
    value: '€5',
  },
  {
    id: '3',
    name: 'Name',
    image: '../../assets/images/user3.png',
    value: '€10',
  },
  {
    id: '4',
    name: 'Name',
    image: '../../assets/images/user3.png',
    value: '€0',
  },
  {
    id: '5',
    name: 'Name',
    image: '../../assets/images/user3.png',
    value: '€5',
  },
  {
    id: '6',
    name: 'Name',
    image: '../../assets/images/user3.png',
    value: '€10',
  },
  // Add more data as needed
];

const CouponsData = [
  {
    id: '1',
    name: 'Invite your peers & earn \n up to 2% of their tips  for life',
    image: images.arrowImage,
  },
  {
    id: '2',
    name: 'Follow your friends, watch their \n progress, and compete for TOP 5',
  },
  {
    id: '3',
    name: 'Order free InstaTip tools and \n increase your tips by upto 70%',
  },
];

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
  const [activeIndex, setActiveIndex] = useState(
    route.params?.activeIndex || 0,
  );
  const [cuponActiveIndex, setCuponActiveIndex] = useState(
    route.params?.cuponActiveIndex || 0,
  );
  const [open, setOpen] = useState(false); // State to control dropdown visibility
  const [value, setValue] = useState('daily'); // State to control selected value
  const [items, setItems] = useState([
    {label: 'Daily', value: 'daily'},
    {label: 'Weekly', value: 'weekly'},
    {label: 'Monthly', value: 'monthly'},
  ]); // Items

  const toggleBlur = () => setIsBlurred(!isBlurred);

  const handleScroll = event => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
    navigation.setParams({activeIndex: index});
  };

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
      {/* Appbar */}
      <View style={styles.appbarStyle}>
        <View style={styles.nameImage}>
          <View style={styles.imageAvatar}>
            <Image source={images.userImages} style={styles.imageAvatar} />
          </View>
          <Text style={styles.nameText}>Hi, John</Text>
        </View>
        <View style={styles.notificationImageContainer}>
          <Image
            source={images.notification}
            style={styles.notificationImage}
          />
        </View>
      </View>

      {/* ImageBackground with Texts and Eye Icon */}
      <ImageBackground
        source={images.cardContentImage}
        resizeMode="contain"
        style={styles.cardImage}>
        <TouchableOpacity onPress={toggleBlur} style={styles.eyeIconWrapper}>
          <Image
            source={!isBlurred ? images.eyeIcon : images.eyeIconHide}
            style={styles.eyeIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          contentOffset={{x: activeIndex * width, y: 0}}
          style={styles.scrollView}>
          {data.map(item => (
            <View key={item.key} style={styles.textContainer}>
              <View style={styles.textWrapper}>
                <Text style={styles.cardMainText}>{item.mainHeading}</Text>
                <Text style={styles.cardSubText}>{item.earned}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
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

      <ImageBackground
        source={images.frame2}
        resizeMode="cover"
        style={styles.discountBannerBgImage}>
        <FlatList
          data={CouponsData}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled={true}
          onScroll={handleCuponScroll}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={styles.discountBanner}>
                {item.image && (
                  <Image style={styles.arrow} source={item.image} />
                )}
                <Text style={styles.discountText(item.image)}>{item.name}</Text>
              </View>
            );
          }}
        />

        <View style={styles.paginationCuponWrapper}>
          {CouponsData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.Cupondot,
                cuponActiveIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </ImageBackground>

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
          <View style={[styles.DropDownContainer, {width: width / 3}]}>
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
              }}
              style={{
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
