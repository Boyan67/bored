import React from 'react';
import {ScrollView, Text, View} from "react-native";
import {globalStyles} from "../styles/global";
import { StyleSheet } from 'react-native';
import IconButton from "../components/IconButton";
import ActivityCardLarge from "../components/ActivityCardLarge";
import { useHeaderHeight } from '@react-navigation/elements';
import Images from "../assets";

function GenerateActivity(props) {
    const headerHeight = useHeaderHeight();
    return (
        <ScrollView style={[globalStyles.container, {marginTop: headerHeight - 20}]}>
            <ActivityCardLarge/>

            <IconButton text={"Mark as complete"} icon={Images.buttonIcons.unchecked}/>
            <IconButton text={"Save for later"} icon={Images.buttonIcons.save}/>
            <IconButton text={"Add photo"} icon={Images.buttonIcons.picture}/>
            <IconButton text={"Add note"} icon={Images.buttonIcons.note}/>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button:{
        marginVertical: 5,
    }
})

export default GenerateActivity;
