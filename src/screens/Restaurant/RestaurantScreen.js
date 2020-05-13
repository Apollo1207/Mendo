import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getIngredientName, getCategoryName, getCategoryById } from '../../data/MockDataAPI';
import Icon from "react-native-vector-icons/FontAwesome5";

const { width: viewportWidth } = Dimensions.get('window');

export default class RestaurantScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  onPressIngredient = item => {
    var name = getIngredientName(item);
    let ingredient = item;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    // const category = getCategoryById(item.categoryId);
    // const title = getCategoryName(category.id);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Carousel
              ref={c => {
                this.slider1Ref = c;
              }}
              data={item.photosArray}
              renderItem={this.renderImage}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={false}
              autoplay={false}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={index => this.setState({ activeSlide: index })}
            />
            <Pagination
              dotsLength={item.photosArray.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgba(255, 255, 255, 0.92)"
              dotStyle={styles.paginationDot}
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this.slider1Ref}
              tappableDots={!!this.slider1Ref}
            />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.name}</Text>
          <View style={styles.infoContainer}>

          </View>

          <View style={styles.majoreInfoContainer}>
          <View style={styles.majorInfoContainer}>
            <Icon name="map-marker-alt" style={styles.sliderIconLocation} size={13.5} color="black"/>
              <Text style={styles.infoRecipe}>Lviv, {item.location}</Text>
          </View>


          <View style={styles.majorsInfoContainer}>
            <Text style={styles.infoTemperature}>{item.temperature}</Text>
        <Icon name="temperature-high" style={styles.slidersIconLocation} size={11.5} color="black"/>

          </View>


</View>


          <View style={styles.minorInfoContainer}>
            <Text style={styles.infoSchedule}>Schedule: {item.schdeule}</Text>
            <Text style={styles.infoDescriptionRecipe}>{item.info}</Text>
          </View>
          <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonContainerText}>Book</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
