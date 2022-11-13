import React from 'react';
import {ScrollView, Text, View} from "react-native";
import {globalStyles} from "../styles/global";
import Heading from "../components/Heading";
import IconButton from "../components/IconButton";

function Jokes(props) {
    return (
        <ScrollView style={globalStyles.container}>
            <Heading text={"jokes"}/>
            <IconButton text={"Saved Activities"}/>
        </ScrollView>
    );
}

export default Jokes;
