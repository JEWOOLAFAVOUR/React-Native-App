import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Main/Home/HomeScreen';
import CartScreen from '../screens/Main/Cart/CartScreen';
import FavoriteScreen from '../screens/Main/Favorite/FavoriteScreen';
import ProfileScreen from '../screens/Main/Profile/ProfileScreen';

const BottomNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Cart' component={CartScreen} />
            <Tab.Screen name='Favorite' component={FavoriteScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({})