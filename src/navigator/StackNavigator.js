import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/Auth/SplashScreen';

const StackNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})