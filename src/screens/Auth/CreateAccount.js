import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CreateAccount = () => {

    const InputContainer = ({ title, placeholder }) => {
        return (
            <View style={{ marginBottom: 10, }}>
                <Text style={{ fontSize: 16, color: 'black', marginBottom: 5 }}>{title}</Text>
                <TextInput
                    placeholder={placeholder}
                    style={styles.input}
                />
            </View>
        )
    }


    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', marginBottom: 20 }}>Register</Text>

            <View>
                <InputContainer title={"Full Name"} placeholder={"Enter your name"} />
                <InputContainer title={"Email"} placeholder={"Enter your email"} />
                <InputContainer title={"Password"} placeholder={"Enter your password"} />
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