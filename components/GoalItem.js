import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.goalList}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles =StyleSheet.create ({
    goalList: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: "#efefef",
        borderWidth: 1,
        marginVertical: 10,
      }
})

export default GoalItem;