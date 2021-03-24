//import liraries
import React, { Component, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext'

// create a component
const ResolveAuthScreen = () => {

  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, [])
  
  return null;
};
//make this component available to the app
export default ResolveAuthScreen;
