import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


const FormInput = ({ title, placeholder }) => {
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

export default FormInput

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 13,
        paddingHorizontal: 10
    },
})