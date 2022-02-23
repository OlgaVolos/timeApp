import React from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import TimeApp from "./src/features/TimeApp";
import UserList from "./src/features/UserList";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";


// const Stack = createNativeStackNavigator() //для звичайної навігації між екранами
const Tab = createBottomTabNavigator()


export default function App() {

    // return (
    //     <NavigationContainer>
    //         <Stack.Navigator initialRouteName={"TimeApp"}>
    //             <Stack.Screen name={"Home"} component={UserList}/>
    //             <Stack.Screen name={"TimeApp"} component={TimeApp}/>
    //         </Stack.Navigator>
    //     </NavigationContainer>
    //
    // ); // навігація (зміна екранів) за допомогою кнопки в TimeApp(Focus), тобто вкладена навігація
    // // initialRouteName - екран, який буде першим відображатися, пропсами передаємо всі необхідні дані


    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'TimeApp') {
                            iconName = 'time';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}>
                <Tab.Screen name="Home" component={UserList} />
                <Tab.Screen name="TimeApp" component={TimeApp} />
            </Tab.Navigator>
            <StatusBar style='dark'/>
        </NavigationContainer>

    ); // навігація з табами. Іконки є у відповідній бібліотеці, тому треба бути уважним, що інсталюємо


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25224D',


    },

});
