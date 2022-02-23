import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import RoundedButton from "../components/RoundedButton";
import History from "../components/History";

const Focus = ({onSubmit, focusHistory, clearHistory, backToScreen}) => {

    const [textSubject, setTextSubject] = useState()

    return <View style={styles.screen}>
        <View>
            <View style={styles.focus}>
                <Text style={styles.focusTxt}>
                    What would you like to focus on?
                </Text>
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.input}
                           value={textSubject}
                           onChangeText={setTextSubject}/>

                <RoundedButton onPress={() => onSubmit(textSubject)} label={'+'}/>
            </View>
        </View>
        <History list={focusHistory}/>
        <RoundedButton label={'Clear'} onPress={clearHistory}/>
        <RoundedButton label={'Back'} onPress={backToScreen}/>

    </View>
};

export default Focus;

let styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 40
    },
    focus: {
        height: 30,
        width: 350,
        marginTop: 111,
        alignItems: 'center',

    },
    focusTxt: {
        fontSize: 24,
        color: '#FFFFFF'
    },
    inputView: {
        marginTop: 27,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    input: {
        height: 60,
        width: 260,
        backgroundColor: '#E7E7E7',
        fontSize: 24,

    },


});
