import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
    };

    const addGoalHandler =() => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    };

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput placeholder="Set a Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
          <View style= {styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Cancel" color="red" onPress={props.onCancel}/>
            </View>
            <View style={styles.button}>
              <Button title="Add item" onPress={addGoalHandler}/>
            </View>
          </View>
        </View>
      </Modal>
    )
};

const styles =StyleSheet.create ({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      input: {
        borderBottomColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "70%",
        marginBottom: 10
      },
      buttonContainer: {
        width: "50%",
        flexDirection: "row-reverse",
        justifyContent: "space-around"

      },
      button: {
        width: "40%"
      }
})

export default GoalInput;