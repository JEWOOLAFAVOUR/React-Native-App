import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const HomeScreen = () => {

    // const [data, setData] = useState('Favour')

    const [current, setCurrent] = useState(false)


    const changeName = () => {

    }

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>React Hooks Class - useState</Text>

            <Text style={{
                fontFamily: 20, color: 'black',
                fontWeight: 'bold', marginTop: 30
            }}>My name is {current ? "Silvernus" : "Favour"}</Text>

            <TouchableOpacity onPress={() => setCurrent(!current)} style={styles.button}>
                <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>Change Text</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30,
        paddingHorizontal: 30,
    },
    button: {
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 30,
    },
})