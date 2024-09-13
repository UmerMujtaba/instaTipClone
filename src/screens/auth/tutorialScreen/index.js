import React, {useState, useRef} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import data from '../../../utils/startScreenData';
import Strings from '../../../constants/strings';

import { images } from '../../../assets/images';
import {hp, rfs, rhp, rwp, width, wp} from '../../../constants/dimensions';

const renderItem3 = ({item}) => {
  return (
    <View style={styles.renderItem1_parentView1}>
      <Image source={item.imgUrl} style={[styles.carouselImage]} />

      <Text style={styles.carouselTitle}>{item.title}</Text>
    </View>
  );
};

const TutorialScreen = ({navigation}) => {
  const [page, setPage] = useState(0);
  const isCarousel = useRef(null);
  // const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={ images.frame}
        style={styles.frameStyle}
      />

      <View style={styles.carouselWrapper}>
        <Carousel
          ref={isCarousel}
          onSnapToItem={index => setPage(index)}
          data={data}
          renderItem={renderItem3}
          sliderWidth={width}
          itemWidth={rwp(248.46)} // Reduce itemWidth so only the active item is fully visible
          inactiveSlideScale={0} // Scale down non-active slides
        />
        <Pagination
          activeDotIndex={page}
          carouselRef={isCarousel}
          tappableDots
          dotsLength={data.length}
          dotStyle={styles.activeDot}
          inactiveDotStyle={styles.inactiveDot}
        />
      </View>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Register')}>
        <LinearGradient
          start={{x: 1, y: 1}}
          end={{x: -0.5, y: 1}}
          colors={['#1DCDFE', '#34F5C5']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>{Strings.register}</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.lineRow}>
        <Image source={ images.line} />
        <Text style={styles.lineBtwnText}>Or</Text>
        <Image source={ images.line} />
      </View>

      <View style={styles.loginText}>
        <Text style={styles.accountLabel}>{Strings.haveAnAccount}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.login}>{Strings.login}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TutorialScreen;
