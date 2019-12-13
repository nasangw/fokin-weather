import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './Color';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.description}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: '5%',
  },
  title: {
    color: 'purple',
    fontSize: 40,
  },
  description: {
    // color: '#fff',
    color: colors.white,
  }
});
