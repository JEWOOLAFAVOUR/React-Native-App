import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

const SplashScreen = ({ navigation }) => {

    const [data, setData] = useState('Silvernus')

    const handleNavigate = () => {
        setTimeout(() => {
            navigation.navigate("Main", { screen: "Bottom" })
        }, 2000)
    }

    useEffect(() => {
        handleNavigate();
    }, [])


    useEffect(() => {

    }, [])


    return (
        <View style={styles.page}>
            <TouchableOpacity>
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