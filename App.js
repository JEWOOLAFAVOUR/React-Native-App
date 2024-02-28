import { StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StackNavigator from './src/navigator/StackNavigator'
import BottomNavigator from './src/navigator/BottomNavigator'

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Auth' component={StackNavigator} />
        <Stack.Screen name='Bottom' component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;