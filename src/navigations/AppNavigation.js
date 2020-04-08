import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import RestaurantsScreen from '../screens/Restaurants/RestaurantsScreen';
import BookingsScreen from '../screens/Bookings/BookingsScreen';
import RestaurantScreen from '../screens/Restaurant/RestaurantScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';



const MainNavigator = createStackNavigator(
  {
    Restaurants: RestaurantsScreen,
    Bookings: BookingsScreen,
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: 'Restaurants',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    })
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;
