//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'
import { SafeAreaView } from 'react-navigation'

// create a component
const AccountScreen = () => {

  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={{fontSize: 48}}>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout}/>
      </Spacer>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

//make this component available to the app
export default AccountScreen;
