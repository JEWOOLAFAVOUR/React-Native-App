import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function Day1() {

    const studentName = ['Favour', 'Silvernus', 'Cephas', 120];


    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>SIMPLIFIED LISTS</Text>
            <View>
                {
                    studentName.map((data, index) => {
                        return (
                            <View key={index}>
                                <Text>{data}</Text>
                            </View>
                        )
                    })
                }
            </View>

            <FlatList
                data={studentName}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item}</Text>
                        </View>
                    )
                }}
            />


        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30,
        paddingLeft: 20,
    },
})