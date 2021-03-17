import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

const LoginScreen = props => {
  return (

    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss();
    }}>

      <View style={styles.main}>

        <View>
          <Text>INSTITUTE OF MANAGEMENT SCIENCES KIOSK </Text>
        </View>

        <View style = {styles.container}>

          <View style = {styles.textinputview}>
            <TextInput style = {{
            
              padding:5,
              borderBottomWidth: 1,
              borderBottomColor:'black'}}
              placeholder="Username">

            </TextInput>
            
            <TextInput style = {{
            
              padding:5,
              borderBottomWidth: 1,
              borderBottomColor:'black'}}
              secureTextEntry = {true}
              placeholder="Password">

            </TextInput>
          
          </View>
          
          <View style={{width: 60}}>
            <Button title= "Login"></Button>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  main: {

    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },

  container : {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 10,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    color: 'white',
    borderRadius: 10

  },

  textinputview: {
    padding: 10,
    width: '60%',
    margin: 20,
  }
});

export default LoginScreen;