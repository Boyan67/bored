import React from 'react';
import {ScrollView} from "react-native";
import {globalStyles} from "../styles/global";
import Heading from "../components/Heading";
import IconButton from "../components/IconButton";

function Settings(props) {
    return (
        <ScrollView style={globalStyles.container}>
            <Heading text={"settings"}/>
            <IconButton text={"Saved Activities"}/>


        </ScrollView>
    );
}

export default Settings;
