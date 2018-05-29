import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component{
    render(){
        console.log("Signup");
        return(
            <View style={styles.container}>
                <Logo />
                <Form type="Signup" />
                <View style={styles.signUpTextCont}>
                    <Text style={styles.signUpText}>Already have an account?</Text>
                    <Text style={styles.signUpButton}>Sign in</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#455a64',
      flexGrow:1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    textStyle:{
      color: '#ffffff',
      fontSize: 18
    },
    signUpTextCont:{
        flexGrow:1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical:16,
        flexDirection: 'row'
    },
    signUpText:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16
    },
    signUpButton:{
        color: "#ffffff",
        fontSize:16,
        fontWeight:'500'
    }
  });
  