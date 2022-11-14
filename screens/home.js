import React, {useState} from 'react';
import {FlatList, ScrollView, View} from "react-native";
import {globalStyles} from "../styles/global";
import { StyleSheet } from 'react-native';
import GenerateButton from "../components/GenerateButton";
import CategoryCard from "../components/CategoryCard";
import CustomSlider from "../components/CustomSlider";
import IconButton from "../components/IconButton";
import Heading from "../components/Heading";
import Images from "../assets";

function Home({navigation}) {
    const [peopleSlider, setPeopleSlider] = useState(.1);
    const [priceSlider, setPriceSlider] = useState(.3);
    const [difficultySlider, setDifficultySlider] = useState(.2);

    const categories = [
        {id: 1, value:"education", image: Images.icons.education},
        {id: 2, value:"recreational", image: Images.icons.recreational},
        {id: 3, value:"social", image: Images.icons.social},
        {id: 4, value:"diy", image: Images.icons.diy},
        {id: 5, value:"charity", image: Images.icons.charity},
        {id: 6, value:"cooking", image: Images.icons.cooker},
        {id: 7, value:"relaxation", image: Images.icons.relaxation},
        {id: 8, value:"music", image: Images.icons.music},
        {id: 9, value:"busywork", image: Images.icons.busywork}]


    return (
        <ScrollView style={globalStyles.container}>
            <Heading text={"bored"}/>
            <IconButton text={"Saved Activities"} onPress={() => navigation.navigate("Saved Activities")} icon={Images.buttonIcons.checked}/>

            <GenerateButton onPress={() => navigation.navigate("Activity")}/>

            <FlatList
                data={categories}
                horizontal={true}
                style={styles.categories}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <CategoryCard text={item.value} image={item.image}/>
            )}/>

            <View style={styles.sliders}>
                <CustomSlider text={"People"} state={peopleSlider} setState={setPeopleSlider} icon={Images.icons.people}/>
                <CustomSlider text={"Price"} state={priceSlider} setState={setPriceSlider} icon={Images.icons.price}/>
                <CustomSlider text={"Accessibility"} state={difficultySlider} setState={setDifficultySlider} icon={Images.icons.accessibility}/>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    categories: {
        marginVertical: 10
    }
});


export default Home;
