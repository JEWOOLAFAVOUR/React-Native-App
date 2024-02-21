import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen2 = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Text>Hello from Mr Silverbys</Text>

            <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')} style={styles.button}>
                <Text>Log in</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    button: {
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
})