import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


const Screen1 = ({ navigation }) => {

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 20, }}>Welcome</Text>
            <Text>Screen1</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Screen2')}
                style={styles.button}>
                <Text style={{ color: 'white' }}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    button: {
        height: 30,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
})