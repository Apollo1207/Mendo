import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import Icon from "react-native-vector-icons/FontAwesome5";

export default class BookingsScreen extends React.Component {
        static navigationOptions = {
            title: 'Bookings'
        };

        constructor(props) {
            super(props);
        }

        onPressRestaurant = item => {
            this.props.navigation.navigate('Restaurant', { item });
        };

        renderRestaurants = ({ item }) => ( <
                TouchableHighlight underlayColor = 'rgba(73,182,77,1,0.9)' /*onPress={() => this.onPressRestaurant(item)}*/ >
                <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.containerClock}>
                      <Icon name="clock" style={styles.slidersIconClock} size={13.5} color="black"/>
                      <Text style={styles.category_top}>{item.time}</Text>
                    </View>
                <View style={styles.containerCalendar}>
                  <Icon name="calendar-check" style={styles.slidersIconCalendar} size={15} color="black"/>
                  <Text style={styles.category_bottom}>{item.date}</Text>
                    </View>
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
