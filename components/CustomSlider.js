import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {Slider} from "@miblanchard/react-native-slider";
import {globalStyles} from "../styles/global";
import {useTheme} from "@react-navigation/native";

function CustomSlider({state, setState, text, icon}) {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <Text style={[styles.text, globalStyles.text, {color: colors.text}]}>{text}</Text>
            <View style={styles.innerContainer}>
                <Image source={icon} style={styles.icon}/>
                <Slider
                    containerStyle={{flex: 1}}
                    value={state}
                    onValueChange={value => setState(value)}
                    minimumTrackTintColor="#2354D1"
                    maximumTrackTintColor={colors.card}
                    thumbTintColor="#2354d1"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 7
    },
    text: {
        marginBottom: -2
    },
    icon: {
        height: 32,
        width: 32,
        marginRight: 5,
    },
    innerContainer: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
    }
})

export default CustomSlider;
