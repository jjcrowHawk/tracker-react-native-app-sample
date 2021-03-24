//import liraries
import React, { Component, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

// create a component
const SignupScreen = ({ navigation }) => {

  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  const { errorMessage } = state;

  return (  
    <View style={styles.container}>
      <NavigationEvents 
        onWillBlur={clearErrorMessage}
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already Have an Account? Sign in"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  link: {
    color: 'blue'
  }
});

//make this component available to the app
export default SignupScreen;
