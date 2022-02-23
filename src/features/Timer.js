import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import TimeCount from "../components/TimeCount";
import {Colors, ProgressBar} from "react-native-paper";
import RoundedButton from "../components/RoundedButton";
import PauseButton from "../components/PauseButton";

const Timer = ({focusSubject, clearSubject, onTimeEnd}) => {
    const [minutes, setMinutes] = useState(2)
    const [progress, setProgress] = useState(1);
    const [isStarted, setIsStarted] = useState(false)


    const changeTime = (min) => () => {
        setProgress(1);
        setIsStarted(false);
        setMinutes(min);
    };
    const onEnd = async () => {
        onTimeEnd();
    };

    const onProgress = (p) => {
        setProgress(p / 100) //ділимо програсбар на частинки і все решта робимо в TimerCount
    };


    return <View style={{flex: 1}}>
        <View style={styles.center}>
            <TimeCount minutes={minutes}
                       isPaused={!isStarted}
                       onEnd={onEnd}
                       onProgress={onProgress}
            />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.txt}>Focusing on:</Text>
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.txt}>{focusSubject}</Text>
        </View>
        <ProgressBar
            style={styles.progressBar}
            progress={progress}
            color={Colors.red800}
        />
        <View style={[styles.btnContainer, styles.marginBtn]}>
            <RoundedButton label={'6s'} onPress={changeTime(0.1)}/>
            <RoundedButton label={'10'} onPress={changeTime(10)}/>
            <RoundedButton label={'20'} onPress={changeTime(20)}/>
        </View>
        <View style={styles.center}>
            {(!isStarted) ?
                (<PauseButton title={'Start'} onPress={() => setIsStarted(true)}/>)
                :
                (<PauseButton title={'Pause'} onPress={() => setIsStarted(false)}/>)
            }
        </View>
        <View style={styles.btnContainer}>
            <RoundedButton label={'-'} onPress={clearSubject}/>
        </View>
    </View>
};

export default Timer;

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    titleContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    txt: {
        fontSize: 18,
        color: '#fff',
    },
    progressBar: {
        marginTop: 50,
    },
    marginBtn: {
        marginTop: 30,
    },
    btnContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 24,
    },
});

