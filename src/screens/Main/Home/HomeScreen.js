import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
    const homeData = [
        { id: 1, title: "Ade", detail: "Good Boy" },
        { id: 2, title: "Favour", detail: "Good Boy" },
        { id: 3, title: "Silvernus", detail: "Good Boy" },
        { id: 4, title: "Lola", detail: "Good Boy" },
        { id: 5, title: "Lola", detail: "Good Boy" },
        { id: 6, title: "Lola", detail: "Good Boy" },
        { id: 7, title: "Lola", detail: "Good Boy" },
    ];



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