import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    const nameData = ['All', "Men's", "Women", "Children", "Female", "Male"];
    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, }}>HomeScreen</Text>

            <FlatList
                data={nameData}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text style={{ fontSize: 16, color: 'white' }}>{item}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    container: {
        paddingHorizontal: 13,
        height: 35,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
})