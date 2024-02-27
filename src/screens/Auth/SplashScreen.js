import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
    },
})