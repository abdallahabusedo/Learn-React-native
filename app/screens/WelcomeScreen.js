import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('./../assets/background.jpg')}
    >
      <Image source={require('./../assets/logo.png')} style={styles.Logo} />
      <View style={styles.LoginButton}></View>
      <View style={styles.RegButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  LoginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#feceab',
  },
  RegButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#f6ab6c',
  },
  Logo: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: 50,
  },
});
