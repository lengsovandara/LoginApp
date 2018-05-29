/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
// import Login from './src/pages/Login';
// import Signup from './src/pages/Signup';
import Routes from './src/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <StatusBar  backgroundColor="#1c313a" barStyle="light-content" />
        <Routes/>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#455a64',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle:{
    color: '#ffffff',
    fontSize: 18
  }
});
