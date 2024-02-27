import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'

const Login = () => {

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', marginBottom: 20 }}>Login</Text>

            <View>
                <FormInput title={"Email"} placeholder={"Enter your email"} />
                <FormInput title={"Password"} placeholder={"Enter your password"} />
            </View>
            <FormButton title={"Sign in"} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
})