import React from 'react';
import {StyleSheet, Text} from "react-native";

function Heading({text}) {
    return (
        <Text style={styles.heading}>{text}<Text style={styles.exclamation}>!</Text></Text>
    );
}


const styles = StyleSheet.create({
    heading: {
        alignSelf: "center",
        marginVertical: 10,
        fontSize: 32,
        fontWeight:"bold",
        color: "#444"
    },
    exclamation: {
        fontSize: 45,
        color: "#2354D1"
    }
});

export default Heading;
