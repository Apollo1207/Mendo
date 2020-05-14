import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import HomeScreen from '../../screens/Home/HomeScreen';
import RestaurantsScreen from '../../screens/Restaurants/RestaurantsScreen';


export default class ForgotScreen extends React.Component {
    render() {
        return (
          <Background>
          <BackButton goBack={() => this.props.navigation.navigate('Home')}/>
          <Header>Restore Password</Header>
          <TextInput
            label="E-mail address"
            returnKeyType="done"
            autoCapitalize="none"
              theme={{colors: {primary: 'grey', underlineColor: 'transparent'}}}
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"/>
          <Button mode="contained"  style={styles.button}>
            Send Reset Instructions
          </Button>
          <TouchableOpacity
            style={styles.back}
          onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.label}>← Back to login</Text>
          </TouchableOpacity>
        </Background>
        );
    }
}
