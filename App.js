import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StackNavigator from './src/navigator/StackNavigator'

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Auth' component={StackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;