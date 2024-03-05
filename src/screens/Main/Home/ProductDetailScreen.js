import { View, Text } from 'react-native'
import React from 'react'

const ProductDetailScreen = ({ route, }) => {
    const favour = route;

    console.log('this is the data coming', favour)
    return (
        <View>
            <Text>{favour.params.silvernus.title}</Text>
            <Text>{favour.params.silvernus.detail}</Text>
        </View>
    )
}

export default ProductDetailScreen