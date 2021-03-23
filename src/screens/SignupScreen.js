//import liraries
import React, { Component, useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext'

// create a component
const SignupScreen = ({ navigation }) => {

  const { state, signup } = useContext(AuthContext);


  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState(''); 

  const { errorMessage } = state;

  return (  
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input 
          label="Email" 
          value={email} 
          onChangeText={setEmail} 
          autoCapitalize="none" 
          autoCorrect={false}/>
      </Spacer>
      <Spacer>
        <Input 
          secureTextEntry={true}
          label="Password" 
          value={password} 
          onChangeText={setPassword} 
          autoCapitalize="none" 
          autoCorrect={false}/>
      </Spacer>
      {
        errorMessage  
        ? <Text style={styles.errorMessage}>{ errorMessage }</Text>
        : null
      }
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })}/>
      </Spacer>
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
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 20,
    marginTop: 15
  }
});

//make this component available to the app
export default SignupScreen;
