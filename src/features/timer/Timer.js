import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Picker} from "@react-native-picker/picker";

const Timer = ({focusSubject}) => {

    const [timePeriod, setTimePeriod] = useState(10)

    useEffect(()=>{},[focusSubject])
    return <View>
        <View style={styles.timer}>
        <Text style={styles.timerTxt}>00:02</Text>
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.txt}>Focusing on:</Text>
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.txt}> {focusSubject}: {timePeriod} min </Text>
        </View>
        <Picker
            selectedValue={timePeriod}
            onValueChange={(itemValue, itemIndex) =>
                setTimePeriod(itemValue)}>
            <Picker.Item label="10 min" value={10} />
            <Picker.Item label="20 min" value={20} />
            <Picker.Item label="30 min" value={30} />
        </Picker>
    </View>
};

export default Timer;

const styles = StyleSheet.create({
    timer: {
        height: 150,
        width: 275,
        backgroundColor: '#383E78',
        marginTop: 110,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerTxt: {
        fontSize: 96,
        color: '#fff'
    },
    titleContainer: {
        height: 25,
        width: 265,
        marginTop: 28,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 18,
        color: '#fff'
    }
});
