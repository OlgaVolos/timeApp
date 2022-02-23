import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import {uuidv4} from "../utils/uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Timer from "./Timer";
import Focus from "./Focus";


const TimeApp = ({navigation}) => {
    const [focusSubject, setFocusSubject] = useState(null);
    const [focusHistory, setFocusHistory] = useState([]);

    const addFocusHistory = (subject) => {
        setFocusHistory([...focusHistory, {subject, key: uuidv4()}])
    };

    const saveHistory = async () => {
        try {
            const history = JSON.stringify(focusHistory);
            await AsyncStorage.setItem('focusHistory', history)
        } catch (e) {
            console.error('error')
        }
    };

    const loadHistory = async () => {
        try {
            const history = await AsyncStorage.getItem('focusHistory');
            if (history && JSON.parse(history).length) {
                setFocusHistory(JSON.parse(history))
            } else {
                setFocusHistory([])
            }
        } catch (e) {
            console.log(e, 'error')

        }
    };

    const clearHistory = async () => {
        await AsyncStorage.clear();
        await loadHistory()
    };

    const backToScreen = () => navigation.navigate('Home')

    useEffect(() => {
        loadHistory()
    }, [])

    useEffect(() => {
        saveHistory()
    }, [focusHistory])


    return (
        <View style={styles.container}>
            {focusSubject ?
                (<Timer focusSubject={focusSubject}
                        onTimeEnd={() => {
                            addFocusHistory(focusSubject);
                            setFocusSubject(null)
                        }
                        }
                        clearSubject={() => setFocusSubject(null)}/>) :
                (<Focus onSubmit={setFocusSubject}
                        focusHistory={focusHistory}
                        clearHistory={clearHistory}
                        backToScreen={backToScreen}
                />)
            }

        </View>
    )
}

export default TimeApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25224D',


    },

});




