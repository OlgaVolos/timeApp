import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const PauseButton = ({title, onPress}) => {
    return <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{fontSize: 24, color: 'white'}}>{title}</Text>
        </TouchableOpacity>
    </View>
};

export default PauseButton;

let styles = StyleSheet.create({
    button: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 30
    }
});
