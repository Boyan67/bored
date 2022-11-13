import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {globalStyles} from "../styles/global";
import Images from "../assets";
import {useTheme} from "@react-navigation/native";

function CategoryCard({text, image}) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity style={[globalStyles.card, styles.button, {backgroundColor: colors.card}]}>
            <Image source={image} style={styles.image}/>
            <Text style={[styles.text, {color: colors.text}]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 85,
        height: 105,
        padding: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 7,
    },
    image: {
        height: 65,
        width: 65
    },
    text: {
        fontSize: 13,
        fontWeight: "normal",
        textTransform: "capitalize"
    }
});

export default CategoryCard;
