import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import RoundedButton from "../../components/RoundedButton";

const Focus = ({onSubmit}) => {
    const [textSubject, setTextSubject] = useState('')

    return <View>
        <View style={styles.focus}>
            <Text style={styles.focusTxt}>What would you like to focus on?</Text>
        </View>
        <View style={styles.inputView}>
            <TextInput style={styles.input}
                       onChangeText={setTextSubject}
                       value={textSubject}
            />
            <RoundedButton onPress={()=> onSubmit(textSubject)} label={'+'}/>
        </View>
    </View>
};

export default Focus;

let styles = StyleSheet.create({
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
        marginLeft: 10,
        marginTop: 27,
        flexDirection: 'row'
    },

    input: {
        height: 60,
        width: 260,
        backgroundColor: '#E7E7E7',
        fontSize: 24,

    },


});
