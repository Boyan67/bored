import React, {useEffect, useState} from 'react';
import {ScrollView, View} from "react-native";
import {globalStyles} from "../styles/global";
import {StyleSheet} from 'react-native';
import IconButton from "../components/IconButton";
import ActivityCardLarge from "../components/ActivityCardLarge";
import {useHeaderHeight} from '@react-navigation/elements';
import Images from "../assets";
import axios from "axios";
import ContentLoader from "react-native-easy-content-loader";

function GenerateActivity() {
    const headerHeight = useHeaderHeight();
    const [activity, setActivity] = useState('');
    const [loading, setLoading] = useState(true);
    const [completed, setCompleted] = useState(true);

    function getActivity() {
        axios.get('https://www.boredapi.com/api/activity/')
            .then(function (response) {
                setActivity(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getActivity()
    }, []);


    return (


        <ScrollView style={[globalStyles.container, {marginTop: headerHeight - 20}]}>
            <ContentLoader
                active
                pRows={4}
                pWidth={"100%"}
                pHeight={[160, 50, 50, 50, 50]}
                loading={loading}
            >
                <ActivityCardLarge
                    accessibility={activity.accessibility}
                    title={activity.activity}
                    category={activity.type}
                    people={activity.participants}
                    price={activity.price}
                />

                <IconButton text={"Mark as complete"} icon={Images.buttonIcons.unchecked}/>
                <IconButton text={"Save for later"} icon={Images.buttonIcons.save}/>
                {completed &&
                    <View>
                        <IconButton text={"Add photo"} icon={Images.buttonIcons.picture}/>
                        <IconButton text={"Add note"} icon={Images.buttonIcons.note}/>
                    </View> }
            </ContentLoader>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 5,
    }
})

export default GenerateActivity;
