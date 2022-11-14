import React from 'react';
import {ScrollView} from "react-native";
import {globalStyles} from "../styles/global";
import Heading from "../components/Heading";
import IconButton from "../components/IconButton";

function Jokes() {
    return (
        <ScrollView style={globalStyles.container}>
            <Heading text={"jokes"}/>
            <IconButton text={"Saved Activities"}/>
        </ScrollView>
    );
}

export default Jokes;
