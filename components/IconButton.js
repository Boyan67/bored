import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../styles/global";
import Images from "../assets";
import {useTheme} from "@react-navigation/native";

function IconButton({text, bgColor = "#fff", txtColor = "#333", onPress, icon}) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            style={[globalStyles.card, styles.container, {backgroundColor: colors.card}]}
            onPress={onPress}
        >
            <Image source={icon} style={styles.image}/>
            <Text style={[globalStyles.text, {color: colors.text}]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image:{
        height: 30,
        width: 30,
        marginRight: 5,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        height: 55,
        alignItems: "center",
        paddingHorizontal: 10,
    }
})


export default IconButton;
