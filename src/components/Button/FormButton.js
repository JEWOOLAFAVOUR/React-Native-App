import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FormButton = ({ navigation, title }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.submitCtn}>
            <Text style={{ fontSize: 15, color: 'white' }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default FormButton

const styles = StyleSheet.create({
    submitCtn: {
        height: 50,
        backgroundColor: 'purple',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
})