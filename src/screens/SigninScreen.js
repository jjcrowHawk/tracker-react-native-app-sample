//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

// create a component
const SigninScreen = () => {

  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const { errorMessage } = state;


  return (
    <View style={styles.container}>
      <NavigationEvents 
        onWillBlur={clearErrorMessage}
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        headerText="Sign In to your Account"
        errorMessage={errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account? Sign Up"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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
});

//make this component available to the app
export default SigninScreen;
