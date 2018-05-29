import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component{
    signup(){
        Actions.signup()
    }
    render(){
        return(
            <View style={styles.container}>
                <Logo />
                <Form type="Login" />
                <View style={styles.signUpTextCont}>
                    <Text style={styles.signUpText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup} > 
                        <Text style={styles.signUpButton}>Signup</Text>
                    </TouchableOpacity>
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
  