import { StyleSheet, Text, View, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    const testData = [
        { id: 1, title: "Ade" },
        { id: 2, title: "Favour" },
    ]

    const RenderHeader = () => {
        return (
            <View>
                <Text>List HeaderComponent Testing</Text>
                <Image source={require('../../../../assets/splash.png')} />
                <FlatList
                    data={['', '', '']}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (
                            <View>

                            </View>
                        )
                    }}

                />
            </View>
        )
    };

    const SilvernusFooter = () => {
        return (
            <View>
                <TouchableOpacity>
                    <Text>Load More</Text>
                    <Text>Load More</Text>
                    <Text>Load More</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.page}>
            <FlatList
                data={testData}
                ListHeaderComponent={RenderHeader}
                ListFooterComponent={SilvernusFooter}
                // numColumns={3}
                // columnWrapperStyle={{ justifyContent: 'space-between' }}
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

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30,
        paddingHorizontal: 30,
    },
})






























// import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
// import React, { useState } from 'react'

// const HomeScreen = () => {

//     // const [data, setData] = useState('Favour')

//     const [current, setCurrent] = useState(false)

//     const [changeColor, setChangeColor] = useState(false)

//     return (
//         <View style={styles.page}>
//             <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>React Hooks Class - useState</Text>

//             <Text style={{
//                 fontFamily: 20, color: changeColor ? 'black' : 'red',
//                 fontWeight: 'bold', marginTop: 30
//             }}>My name is {current ? "Silvernus" : "Favour"}</Text>

//             <TouchableOpacity onPress={() => setCurrent(!current)} style={styles.button}>
//                 <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>Change Text</Text>
//             </TouchableOpacity>

//             <Button title='Change Color' color={'black'} onPress={() => setChangeColor(!changeColor)} />

//         </View>
//     )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//     page: {
//         flex: 1,
//         backgroundColor: 'white',
//         paddingTop: 30,
//         paddingHorizontal: 30,
//     },
//     button: {
//         height: 40,
//         backgroundColor: 'blue',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//         marginTop: 30,
//     },
// })