import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  
    return (
    <View style={styles.inputContainer}>
        <TextInput placeholder="Set a Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title="Add item" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
      </View>
    )
};

const styles =StyleSheet.create ({
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
      }
})

export default GoalInput;