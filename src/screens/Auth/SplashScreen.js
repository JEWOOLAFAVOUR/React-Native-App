import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <TouchableOpacity onPress={() => navigation.navigate('FormScreen')}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}> */}
                <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>SplashScreen</Text>
            </TouchableOpacity>
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