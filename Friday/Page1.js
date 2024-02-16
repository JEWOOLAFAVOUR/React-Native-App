import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
    return (
        <View style={styles.page}>

            <TouchableOpacity>
                <Text>Hello SilverNus</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold ' }}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default App

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 40,
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
    },
});