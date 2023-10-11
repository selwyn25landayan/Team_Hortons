import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import BackgroundImage from './components/BackgroundImage';
import PortraitIcon from '@mui/icons-material/Portrait';

const DeleteConfirmationModal = ({ visible, onDelete, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Are you sure you want to delete this goal?</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.deleteButton]}
              onPress={() => {
                onDelete();
                onClose();
              }}>
              <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onClose}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [warningModalVisible, setWarningModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [goalToDelete, setGoalToDelete] = useState(null);

  const image = { uri: 'https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/original/24.jpg' };

  useEffect(() => {
    if (courseGoals.length > 5) {
      setWarningModalVisible(true);
    } else {
      setWarningModalVisible(false);
    }
  }, [courseGoals]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  const deleteGoalHandler = (goalKey) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== goalKey);
    });
  };

  const handleDeletePress = (goal) => {
    setGoalToDelete(goal);
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirmation = () => {
    if (goalToDelete) {
      deleteGoalHandler(goalToDelete.key);
    }
    setGoalToDelete(null);
    setDeleteModalVisible(false);
  };

  return (
    <BackgroundImage source={image}>
      <View style={styles.appContainer}>
        <Pressable onPress={() => setModalVisible(true)}>
          <PortraitIcon style={styles.userIcon} />
        </Pressable>
        <Text style={styles.title}>SET YOUR GOALS HIGH AND DON'T STOP TILL YOU GET THERE</Text>
        <GoalInput onAddGoal={addGoalHandler} />
        <Text style={styles.goalHeader}>Course Goals</Text>
        <View style={styles.goalListContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDelete={() => handleDeletePress(itemData.item)}
                />
              );
            }}
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Welcome to the Course Goal App</Text>
            <Text style={styles.modalText}>- TEAM HORTONS, 2023</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={warningModalVisible}
        onRequestClose={() => {
          setWarningModalVisible(!warningModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Warning!</Text>
            <Text style={styles.modalText}>You have more than 5 goals in the list.</Text>
            <Text style={styles.modalText}>A maximum of five goal inputs is allowed.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setWarningModalVisible(!warningModalVisible)}>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <DeleteConfirmationModal
        visible={deleteModalVisible}
        onDelete={handleDeleteConfirmation}
        onClose={() => setDeleteModalVisible(false)}
      />
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalListContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 16,
    borderRadius: 20,
    marginTop: 10,
    width: '100%',
    maxHeight: 580,
  },

  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 50,
    textAlign: 'center',
    fontFamily: 'Opens Sans',
    fontStyle: 'italic',
  },

  goalHeader: {
    fontSize: 25,
    marginBottom: 5,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },

  userIcon: {
    fontSize: 80,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  deleteButton: {
    backgroundColor: 'red',
    marginTop: 5,
  },

  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 5,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
