import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'

const CreateAccount = ({ navigation }) => {


    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', marginBottom: 20 }}>Register</Text>

            <View>
                <FormInput title={"Full Name"} placeholder={"Enter your name"} />
                <FormInput title={"Email"} placeholder={"Enter your email"} />
                <FormInput title={"Password"} placeholder={"Enter your password"} />
            </View>
            <FormButton title={"Sign up"} />

            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, color: 'black' }}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Silvernus')}>
                    <Text style={{ fontSize: 15, color: 'red', fontWeight: 'bold' }}> Sign in</Text>
                </TouchableOpacity>
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
})