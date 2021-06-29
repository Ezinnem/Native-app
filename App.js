import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [ OutputText, setOutputText ] = useState ('This is the text and it is beautiful')
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder="Life Goal" style={{borderBottomColor: "black", borderWidth: 1, padding: 10, width: "70%"}}/>
        <Button title="Add item"/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
