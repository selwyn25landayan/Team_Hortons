import { Text, View, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredText] = useState('');
  const [timePressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timePressed > 1) {
    textLog = timePressed + 'x onPress';
  } else if (timePressed > 0) {
    textLog = 'onPress';
  }

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredText('');
  }

  return (
    <View style={styles.inputContainer}> 
      <TextInput
        placeholder='Your Course Goal'
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Pressable
        onPress={addGoalHandler} unstable_pressDelay={500}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(255, 255, 2555)' : 'rgb(255, 109, 106)',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => <Text style={styles.text}>{pressed ? 'Added!' : 'Add Goal'}</Text>}
      </Pressable>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 3,
    borderColor: 'black',
    width: '70%',
    marginRight: 8,
    padding: 13,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});
