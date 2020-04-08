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
import BackButton from '../../components/BackButton/BackButton';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';

const { width: viewportWidth } = Dimensions.get('window');

export default class RecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: 'true',
      headerLeft: (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      )
    };
  };

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
    const category = getCategoryById(item.categoryId);
    const title = getCategoryName(category.id);

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
          <Text style={styles.infoRecipeName}>Hello</Text>
          <View style={styles.infoContainer}>

          </View>

          <View style={styles.infoContainer}>
            <Image style={styles.infoPhoto} source={require('../../../assets/icons/time.png')} />
            <Text style={styles.infoRecipe}>25 minutes </Text>
          </View>


          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
          </View>
          <View style={styles.infoContainer}>
            <ViewIngredientsButton
              onPress={() => {
                let ingredients = item.ingredients;
                let title = 'Ingredients for ' + item.title;
                navigation.navigate('IngredientsDetails', { ingredients, title });
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
