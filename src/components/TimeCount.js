import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";

const minToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;

const TimeCount = ({minutes, isPaused, onEnd, onProgress}) => {

    const [millis, setMillis] = useState(minToMillis(minutes));
    const interval = React.useRef(null); ////створює та утримує значення,
    // навіть як компонент анмаунтиться. Сюди запишеться наше значення таймера

    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;



    useEffect(() => {
        setMillis(minToMillis(minutes));
        return () => clearInterval(interval.current)
    }, [minutes]) //ефект перезапуститься, якщо хвилини зміняться

    useEffect(() => {
        if (isPaused) {
            if (interval.current) {
                clearInterval(interval.current)
            }
            return
        }
        interval.current = setInterval(countDown, 1000);// це сеттаймаут
    }, [isPaused]) //запускає/зупиняє таймер


    const countDown = () => {
        setMillis((time) => {
            if (time === 0) {
                clearInterval(interval.current) //зупинить інтервал, як дійде до нуля
                onEnd();
                return time;
            }
            const timeLeft = time - 1000;
            const progress = timeLeft/minToMillis(minutes)*100;
            onProgress(progress)// час, що залишився, ділимо на частинки
            return timeLeft
        })
    }; //це таймер зворотнього відліку



    return <View style={styles.timer}>
        <Text style={styles.timerTxt}>{formatTime(minute)}:{formatTime(seconds)}</Text>
    </View>
};

export default TimeCount;

let styles = StyleSheet.create({
    timer: {
        height: 125,
        width: 275,
        backgroundColor: '#383E78',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerTxt: {
        fontSize: 96,
        color: '#fff'
    },
});
