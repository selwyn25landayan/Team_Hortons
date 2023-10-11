import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ text, onDelete }) => {
  return (
    <View style={styles.goalItems}>
      <Text style={styles.goalText}>{text}</Text>
      <Pressable onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(119, 158, 203, 0.5)',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },

  goalText: {
    flex: 1,
    fontSize: 16,
  },

  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },

  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
