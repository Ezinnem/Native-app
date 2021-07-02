import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  
  const [lifeGoals, setLifeGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setLifeGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal}]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Set a Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title="Add item" onPress={addGoalHandler}/>
      </View>
      < FlatList keyExtractor={(item, index) => item.id} data={lifeGoals} renderItem={itemData => (
        <View style={styles.goalList}>
        <Text>{itemData.item.value}</Text>
        </View>
      )} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "70%"
  },
  goalList: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: "#efefef",
    borderWidth: 1,
    marginVertical: 10,
  }
});
