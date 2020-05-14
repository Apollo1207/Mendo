import React from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';


export default class HomeScreen extends React.Component {

    render() {
        return (
          <Background>
              <Header>Mendo</Header>
              <Paragraph>
                The easiest way to start with your amazing application.
              </Paragraph>
              <Button style={styles.signin} mode="contained" onPress={() => this.props.navigation.navigate('Login')}>
                Login
              </Button>
              <Button style={styles.signupbutton}
                mode="contained"
          onPress={() => this.props.navigation.navigate('Registration')}>
                <Text style={styles.signup}>Sign Up</Text>
              </Button>
            </Background>
        );
    }

}
