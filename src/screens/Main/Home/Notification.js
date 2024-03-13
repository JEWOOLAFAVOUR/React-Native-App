import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Notification = () => {

    const RenderTemplate = ({ data }) => {
        return (
            <View>
                <Text>{data}</Text>
            </View>
        )
    }


    return (
        <View>
            <FlatList
                data={['Ade', 'Jidi']}
                renderItem={({ item }) => <RenderTemplate data={item} />}
            />
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({})