import React from 'react';
import {ScrollView} from "react-native";
import {useHeaderHeight} from "@react-navigation/elements";
import {globalStyles} from "../styles/global";
import SavedActivity from "../components/SavedActivity";

function SavedActivities() {
    const headerHeight = useHeaderHeight();
    return (
        <ScrollView style={[globalStyles.container, {marginTop: headerHeight - 20}]}>
            <SavedActivity/>
            <SavedActivity completed={true}/>

        </ScrollView>
    );
}

export default SavedActivities;
