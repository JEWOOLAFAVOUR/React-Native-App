import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.page}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* FIRST BOX  */}
        <View style={styles.box1}>

        </View>
        {/* SECOND BOX */}
        <View style={styles.box2}>

        </View>
        {/* THIRD BOX */}
        <View style={styles.box3}></View>

      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },
  box1: {
    height: 80,
    width: 80,
    backgroundColor: 'tomato',
    marginBottom: 20,
  },
  box2: {
    height: 80,
    width: 80,
    backgroundColor: 'indigo',
    marginBottom: 20,
  },
  box3: {
    height: 80,
    width: 80,
    backgroundColor: 'purple',
  },
})