import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name='' />
        </Tab.Navigator>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({})