import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi abdallah abu sedo </Text>
      <Image
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300',
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
