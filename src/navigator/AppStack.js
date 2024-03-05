import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Notification from '../screens/Main/Home/Notification';
import BottomNavigator from './BottomNavigator';
import ProductDetailScreen from '../screens/Main/Home/ProductDetailScreen';

const AppStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name='Bottom' component={BottomNavigator} />


            <Stack.Screen name='Notification' component={Notification} />
            <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen} />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})