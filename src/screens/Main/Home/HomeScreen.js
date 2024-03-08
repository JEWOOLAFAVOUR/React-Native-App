import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const HomeScreen = () => {
    // const name = 'Silvernus'


    const [name, setName] = useState('Silvernus')


    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 20, color: 'black' }}>My name is {name}</Text>

            <View style={{ marginTop: 50 }}>
                <Button title='Change' color={'blue'}
                    onPress={() => setName('Favour')}
                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
})