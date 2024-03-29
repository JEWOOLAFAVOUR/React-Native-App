import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/Auth/SplashScreen';
import CreateAccount from '../screens/Auth/CreateAccount';
import Login from '../screens/Auth/Login'
import FormScreen from '../screens/Main/Home/FormScreen';

const StackNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='CreateAccount' component={CreateAccount} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='FormScreen' component={FormScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})