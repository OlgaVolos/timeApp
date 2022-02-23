import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";

const History = ({list=[]}) => {

    return <View>
        <SafeAreaView style={styles.historyWrapper}>
            <View>
                <Text style={styles.historyText}>Things we've focused on:</Text>
                {
                    list.map((listItem)=>(<View key={listItem.key}>
                        <Text style={styles.historyText}>{listItem.subject}</Text>
                    </View>) )
                }
            </View>
        </SafeAreaView>
    </View>
};

export default History;


let styles = StyleSheet.create({
    historyWrapper: {
        flex: 0.5,
        alignItems: 'center',
        fontSize: 18,
        color: '#fff',
    },
    historyText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 5
    }
});
