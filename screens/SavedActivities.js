import React from 'react';
import {ScrollView, View} from "react-native";
import {useHeaderHeight} from "@react-navigation/elements";
import {globalStyles} from "../styles/global";
import ActivityCardLarge from "../components/ActivityCardLarge";
import IconButton from "../components/IconButton";
import SavedActivity from "../components/SavedActivity";

function SavedActivities(props) {
    const headerHeight = useHeaderHeight();
    return (
        <ScrollView style={[globalStyles.container, {marginTop: headerHeight - 20}]}>
            <SavedActivity/>
            <SavedActivity completed={true}/>

        </ScrollView>
    );
}

export default SavedActivities;
