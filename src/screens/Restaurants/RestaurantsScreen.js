import React from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';
import { recipes } from '../../data/dataArrays';
import DrawerActions from 'react-navigation';
import MenuImage from '../../components/MenuImage/MenuImage';
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


    renderBookings = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRestaurant(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text>
      </View>
    </TouchableHighlight>
    );

    render() {
        return (
            <View>
        <FlatList
          data={categories}
          renderItem={this.renderBookings}
          keyExtractor={item => `${item.id}`}
        />
      </View>
        );
    }
}
