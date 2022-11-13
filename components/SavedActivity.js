import React from 'react';
import {Image, Share, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../styles/global";
import Images from "../assets";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from 'react-native';
import {useTheme} from "@react-navigation/native";

function SavedActivity({onPress, completed}) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            style={[globalStyles.card, styles.container,
                {backgroundColor:completed ? "#f8f8f8" : colors.card, borderWidth: !completed ? 3 : 0, borderColor: "#2354D1"}]}
            onPress={onPress}
        >

            <Text
                style={[styles.title, globalStyles.text,
                    {color: completed ? "#666" : colors.text, textDecorationLine: completed ? 'line-through': "none"}]}
            >
                Make a scrapbook with pictures of your favorite memories
            </Text>

            <View style={styles.detailsContainer}>
                <View style={styles.details}>
                    <Image source={Images.icons.cooker} style={styles.categoryIcon}/>
                    <Text style={{color: completed ? "#666" : colors.text}}>Category</Text>
                </View>
                <View style={styles.details}>
                    <Image source={Images.icons.people} style={styles.categoryIcon}/>
                    <Text style={{color: completed ? "#666" : colors.text}}>2</Text>
                </View>
                <View style={styles.details}>
                    <Image source={Images.icons.price} style={styles.categoryIcon}/>
                    <Text style={{color: completed ? "#666" : colors.text}}>10%</Text>
                </View>
                <View style={styles.details}>
                    <Image source={Images.icons.averageGray} style={styles.categoryIcon}/>
                    <Text style={{color: completed ? "#666" : colors.text}}>50%</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 15,
    },
    categoryIcon: {
        resizeMode:"contain",
        width: 32,
        height: 32
    },
    headerTitle: {
        flex: 1,
        textTransform: "uppercase"
    },
    title:{
        fontSize: 18,
        marginBottom: 7
    },
    detailsContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    details:{
        flex: 1,
        alignItems: "center",
    }


})

export default SavedActivity;
