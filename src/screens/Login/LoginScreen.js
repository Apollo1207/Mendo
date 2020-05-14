import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import HomeScreen from '../../screens/Home/HomeScreen';
import RegistrationScreen from '../../screens/Registration/RegistrationScreen';
import RestaurantsScreen from '../../screens/Restaurants/RestaurantsScreen';
import ForgotScreen from '../../screens/Forgot/ForgotScreen';


export default class LoginScreen extends React.Component {
    render() {
        return (
          <Background>
              <BackButton goBack={() => this.props.navigation.navigate('Home')} />
              <Header>Welcome back</Header>
              <TextInput style={styles.a}
                label="Email"
                returnKeyType="next"
                theme={{colors: {primary: 'grey', underlineColor: 'transparent'}}}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"/>
              <TextInput
                label="Password"
                returnKeyType="done"
                  theme={{colors: {primary: 'grey', underlineColor: 'transparent'}}}
                secureTextEntry/>
              <View style={styles.forgotPassword}>
                <TouchableOpacity
                   onPress={() => this.props.navigation.navigate('Forgot')}>
                  <Text style={styles.label}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
              <Button style={styles.button} mode="contained" onPress={() => this.props.navigation.navigate('Restaurants')}>
                Login
              </Button>
              <View style={styles.row}>
                <Text style={styles.label}>Don’t have an account? </Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
                  <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </Background>
        );
    }
}
