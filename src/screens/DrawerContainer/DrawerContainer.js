import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="RESTAURANTS"
            source={require('../../../assets/icons/homes.png')}
            onPress={() => {
              navigation.navigate('Restaurants');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="BOOKINGS"
            source={require('../../../assets/icons/a.png')}
            onPress={() => {
              navigation.navigate('Bookings');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="PROFILE"
            source={require('../../../assets/icons/profile.png')}
            onPress={() => {
              navigation.navigate('Profile');
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
        );
    }
}

DrawerContainer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    })
};