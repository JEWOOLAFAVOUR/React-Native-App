import { StyleSheet, Image } from 'react-native'
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
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        return (
                            <Image source={require('../../assets/home.png')} style={{ height: 20, width: 22, tintColor: focused ? 'purple' : 'black' }} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        return (
                            <Image source={require('../../assets/cart.png')} style={{ height: 20, width: 22, tintColor: focused ? 'purple' : 'black' }} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Favourite'
                component={FavoriteScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        return (
                            <Image source={require('../../assets/favourite.png')} style={{ height: 20, width: 22, tintColor: focused ? 'purple' : 'black' }} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        return (
                            <Image source={require('../../assets/account.png')} style={{ height: 20, width: 22, tintColor: focused ? 'purple' : 'black' }} />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({})