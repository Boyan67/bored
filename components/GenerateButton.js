import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {globalStyles} from "../styles/global";

function GenerateButton({onPress}) {
    return (
        <TouchableOpacity style={[globalStyles.card, {marginTop: 10}]} onPress={onPress}>
            <LinearGradient
                colors={['#2354D1', 'rgba(35,84,209,0.6)']}
                style={[styles.background]}
                end={{x: 1, y: 0.5 }}
            >
                <Text style={styles.text}>GENERATE</Text>
                <Text style={styles.text}>ACTIVITY</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    background: {
        paddingHorizontal: 30,
        paddingVertical: 80,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        color: "#fff",
        lineHeight: 28,
    }
});



export default GenerateButton;
