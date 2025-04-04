import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TaskInputProps {
  onAddTask: (taskTitle: string, priority: boolean) => void;
}

// define the TaskInput component

const TaskInput: React.FC<TaskInputProps> = props => {
  // state to manage the input value
  const [enteredTask, setEnteredTask] = useState('');

  // state to manage the priority status
  const [isPriority, setIsPriority] = useState(false);

  // handle text input change
  const taskInputHandler = (enteredText: string) => {
    setEnteredTask(enteredText);
  };

  // handle task submission
  const addTaskHandler = () => {
    if (enteredTask.trim() !== '') {
      props.onAddTask(enteredTask, isPriority);
      setEnteredTask(''); // clear the input
      setIsPriority(false); // reset priority
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a task"
          placeholderTextColor="#8E8E93"
          style={styles.input}
          value={enteredTask}
          onChangeText={taskInputHandler}
          // allow submit with return
          onSubmitEditing={addTaskHandler}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.priorityButton}
          onPress={() => setIsPriority(!isPriority)}
        >
          <Ionicons name={isPriority ? "star" : "star-outline"} size={20} color="#FFD700" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={addTaskHandler}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 8,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#7c4dff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  priorityButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default TaskInput;