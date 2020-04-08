import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';

export default class RestaurantsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Restaurants',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });

  constructor(props) {
    super(props);
  }

  onPressRestaurant = item => {
    this.props.navigation.navigate('Restaurant', { item });
  };

  renderRestaurants = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRestaurant(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRestaurants}
          keyExtractor={item => `${item.restaurantId}`}
        />
      </View>
    );
  }
}
