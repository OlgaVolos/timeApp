import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const RoundedButton = ({label, onPress}) => {
    return <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{fontSize: 24, color: 'white'}}>{label}</Text>
        </TouchableOpacity>
    </View>
};

export default RoundedButton;

let styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 24,
    }
});
