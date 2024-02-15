import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const Page2 = () => {
    return (
        <View style={styles.page}>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: 'blue', fontWeight: 'bold' }}>Create Account</Text>
                <Text style={{ fontSize: 14, color: 'black', textAlign: 'center', marginTop: 5 }}>Create an account so you can explore all the existing jobs</Text>
            </View>

            <View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Email" />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput placeholder="Password" />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput placeholder="Confirm Password" />
                </View>
            </View>

        </View>
    )
};

export default Page2;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop: 70,
    },
    inputContainer: {
        height: 45,
        width: "100%",
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'blue',
        paddingHorizontal: 15,
        justifyContent: 'center',
        marginBottom: 20,
    },
});