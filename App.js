import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Activity from "./screens/GenerateActivity";
import home from "./screens/home";
import {useColorScheme} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Jokes from "./screens/Jokes";
import Settings from "./screens/Settings";
import SavedActivities from "./screens/SavedActivities";

const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    elevation: 0,
                    height: 55,
                },

                tabBarIcon: ({ focused, color, size }) => {
                    let icon;

                    if (route.name === 'Home') {
                        icon = <Ionicons name={"home"} size={size} color={color} />
                    } else if (route.name === "Jokes"){
                        icon = <FontAwesome5 name={"laugh-beam"} size={size} color={color} />
                    } else if (route.name === 'Settings') {
                        icon = <Ionicons name={"settings"} size={size} color={color} />;
                    }

                    // You can return any component that you like here!
                    return icon;
                },
                tabBarActiveTintColor: '#2555D2',
                tabBarInactiveTintColor: '#999',
            })}
        >
            <Tab.Screen name="Home" component={home}/>
            <Tab.Screen name="Jokes" component={Jokes}/>
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    const scheme = useColorScheme();
    // const scheme = "dark";

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack.Navigator >
                <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown: false}}/>
                <Stack.Screen name="Activity" component={Activity} options={{headerTransparent: true, headerTitleAlign: 'center'}} />
                <Stack.Screen name="Saved Activities" component={SavedActivities} options={{headerTransparent: true, headerTitleAlign: 'center'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
