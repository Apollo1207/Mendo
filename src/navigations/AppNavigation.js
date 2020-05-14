import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegistrationScreen from '../screens/Registration/RegistrationScreen';
import ForgotScreen from '../screens/Forgot/ForgotScreen';
import RestaurantsScreen from '../screens/Restaurants/RestaurantsScreen';
import BookingsScreen from '../screens/Bookings/BookingsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import RestaurantScreen from '../screens/Restaurant/RestaurantScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';


const MainNavigator = createStackNavigator(
  {
    Restaurants: RestaurantsScreen,
    Bookings: BookingsScreen,
      Profile: ProfileScreen,
    Restaurant: {
      screen: RestaurantScreen,
      navigationOptions: {
        header: null,
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      }
    },
    Registration: {
      screen: RegistrationScreen,
      navigationOptions: {
        header: null,
      }
    },
    Forgot: {
      screen: ForgotScreen,
      navigationOptions: {
        header: null,
      }
    },
  },
  {
    initialRouteName: 'Home',
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
