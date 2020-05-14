import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import HomeScreen from '../../screens/Home/HomeScreen';


export default class LoginScreen extends React.Component {
    render() {
        return (
          <Background>
        <BackButton goBack={() => this.props.navigation.navigate('Home')} />
        <Header>Create Account</Header>
        <TextInput
          label="Name"
          returnKeyType="next"/>
        <TextInput
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
        <Button mode="contained" style={styles.button}>
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text style={styles.label}>Already have an account? </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Background>
        );
    }
}
