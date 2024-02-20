import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {

  const name = ['Favour', 'Silvernus', 'Cephas', 120];

  return (
    <View style={styles.page}>
      <Text>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingLeft: 20,
  },
})