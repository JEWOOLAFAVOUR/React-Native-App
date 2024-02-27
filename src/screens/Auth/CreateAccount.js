import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const CreateAccount = () => {
    return (
        <View style={styles.page}>
            <Text>CreateAccount</Text>
        </View>
    )
}

export default CreateAccount

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
})