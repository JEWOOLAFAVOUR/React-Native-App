import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

const Page1 = () => {
    return (
        <View style={styles.page}>
            <Image source={require('./assets/authentification.jpg')} style={styles.image} />
            <Text style={{ fontSize: 30, color: "blue", fontWeight: 'bold', textAlign: 'center' }}>Discover Your Dream Job here</Text>
            <Text style={styles.exploreText}>Explore all the existing job roles based on your interest and study major</Text>

            <View style={styles.buttonRow}>
                <View style={styles.button}>
                    <Button title="Login" color={'blue'} />
                </View>

                <View style={styles.button}>
                    <Button title="Register" color={'black'} />
                </View>
            </View>

        </View>
    );
};

export default Page1;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop: 40,
        marginBottom: 20,
    },
    image: {
        height: 350,
        width: 300,
        alignSelf: 'center',
    },
    exploreText: {
        fontSize: 13,
        color: 'black',
        textAlign: 'center',
        marginTop: 18,
        marginBottom: 30,
        marginHorizontal: 15,
    },
    button: {
        height: 40,
        width: 120,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});