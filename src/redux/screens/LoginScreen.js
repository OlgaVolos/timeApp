import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";
import {doLogin} from "../store/actions";



const LoginScreen = () => {
    const dispatch = useDispatch()

const onPress  = () => {
        dispatch(doLogin())
};

    return <View style={styles.loginStyle}>
        <Button  title={'Press to login'} onPress={onPress}/>
    </View>
};

export default LoginScreen;

let styles = StyleSheet.create({
    loginStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
