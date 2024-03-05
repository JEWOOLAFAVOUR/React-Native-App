import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Notification = ({ route }) => {

    const data = route.params.favour;

    console.log('ddddddddddddddddd', data)

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({})