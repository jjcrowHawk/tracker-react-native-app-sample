//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const TrackListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>TrackListScreen</Text>
      <Button title="Navigate to detail" onPress={() => {navigation.navigate('TrackDetail')}}></Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default TrackListScreen;
