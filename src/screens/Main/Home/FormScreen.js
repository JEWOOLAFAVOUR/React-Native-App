import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const FormScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    // console.log('the output of the text input', name, password)
    // console.log('Name: ', name)
    // console.log('Password: ', password)

    const handleSubmit = () => {
        const body = { name, password }

        console.log('this is the body', body)

        // navigation.navigate('Login')

    }

    return (
        <View style={styles.page}>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', marginBottom: 10 }}>Enter your name</Text>
                <View style={styles.inputCtn}>
                    <TextInput
                        value={name}
                        onChangeText={(silvernus) => setName(silvernus)}
                        placeholder='Enter your name'
                        style={{ fontSize: 14, color: 'black' }} />
                </View>
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', marginBottom: 10 }}>Enter your password</Text>
                <View style={styles.inputCtn}>
                    <TextInput
                        value={password}
                        onChangeText={(silvernus) => setPassword(silvernus)}
                        placeholder='Enter your password'
                        style={{ fontSize: 14, color: 'black' }} />
                </View>
            </View>

            <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
                <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>Next Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FormScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30,
        paddingHorizontal: 30,

    },
    inputCtn: {
        height: 40,
        borderWidth: 2,
        justifyContent: 'center',
        paddingHorizontal: 15,
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