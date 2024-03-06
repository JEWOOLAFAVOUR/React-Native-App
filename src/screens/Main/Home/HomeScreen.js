import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { homeData } from './components/data'
import { nameData } from './components/data'


const HomeScreen = ({ navigation }) => {




    return (
        <View style={styles.page}>
            <TouchableOpacity onPress={() => navigation.navigate('Notification', { favour: homeData })}>
                <Text style={{ fontSize: 30, }}>Notification</Text>
            </TouchableOpacity>
            <FlatList
                data={homeData}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ProductDetailScreen", { silvernus: item })} style={styles.container}>
                            <Text style={{ color: 'white', fontSize: 17 }}>{item.title}</Text>
                        </TouchableOpacity>
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
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})