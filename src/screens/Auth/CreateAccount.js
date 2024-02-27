import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CreateAccount = () => {

    const InputContainer = () => {
        return (
            <View style={{ marginBottom: 10, }}>
                <Text style={{ fontSize: 16, color: 'black', marginBottom: 5 }}>Full Name</Text>
                <TextInput
                    placeholder='Enter your Name'
                    style={styles.input}
                />
            </View>
        )
    }


    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', marginBottom: 20 }}>Register</Text>

            <View>
                <InputContainer />
                <InputContainer />
                <InputContainer />
            </View>
        </View>
    )
}

export default CreateAccount

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 13,
        paddingHorizontal: 10
    },
})