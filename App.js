import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'

const App = () => {
  const Stack = createStackNavigator()
  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name='Screen1' component={Screen1} />
        <Stack.Screen name='Screen2' component={Screen2} />
        <Stack.Screen name='ThirdScreen' component={Screen3} />

      </Stack.Navigator>

    </NavigationContainer>


  )
}

export default App

const styles = StyleSheet.create({})