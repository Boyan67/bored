import React from 'react';
import {Image, Share, Text, View} from "react-native";
import {globalStyles} from "../styles/global";
import Images from "../assets";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from 'react-native';
import {useTheme} from "@react-navigation/native";

function ActivityCardLarge(props) {
    const { colors } = useTheme();
    return (
        <View style={[globalStyles.card, styles.container, {backgroundColor:colors.card}]}>
            <View style={styles.header}>
                <Image source={Images.icons.cooker} style={styles.categoryIcon}/>
                <Text style={[styles.headerTitle,{color: colors.text}]}>Category</Text>
                <Ionicons name={"share-social-outline"} size={30} color={"#2354D1"}/>
            </View>

            <Text style={[styles.title, globalStyles.text, {color: colors.text}]}>Make a scrapbook with pictures of your favorite memories</Text>

            <View style={styles.detailsContainer}>
                <View style={styles.details}>
                    <Image source={Images.icons.people} style={styles.categoryIcon}/>
                    <Text style={[globalStyles.text, {color: colors.text}]}>3</Text>
                </View>
                <View style={styles.details}>
                    <Image source={Images.icons.price} style={styles.categoryIcon}/>
                    <Text style={[globalStyles.text, {color: colors.text}]}>35%</Text>
                </View>
                <View style={styles.details}>
                    <Image source={Images.icons.averageGray} style={styles.categoryIcon}/>
                    <Text style={[globalStyles.text, {color: colors.text}]}>35%</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 15,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    categoryIcon: {
        resizeMode:"contain",
        width: 35,
        height: 35
    },
    headerTitle: {
        flex: 1,
        textTransform: "uppercase"
    },
    title:{
        fontSize: 23,
        padding: 7
    },
    detailsContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    details:{
        flex: 1,
        alignItems: "center"
    }


})

export default ActivityCardLarge;
