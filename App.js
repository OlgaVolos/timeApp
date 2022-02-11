import React, {useState} from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Timer from "./src/features/timer/Timer";
import Focus from "./src/features/focus/Focus";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  return (
    <View style={styles.container}>
      {focusSubject ? <Timer focusSubject={focusSubject}/> : <Focus onSubmit={setFocusSubject}/>}

      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25224D',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

});
