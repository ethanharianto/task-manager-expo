import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';

// define task
interface Task {
  id: string;
  value: string;
  completed: boolean;
  priority: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    // sample tasks
    {
      id: '1',
      value: 'Daily Design Challenge',
      completed: true,
      priority: false
    },
    {
      id: '2',
      value: 'Weekly Team Meet',
      completed: false,
      priority: true
    },
    {
      id: '3',
      value: 'Teezaro Project Presentation',
      completed: false,
      priority: false
    }
  ]);

  // state for filter
  const [filter, setFilter] = useState<string>('Priority');

  // toggle task completion status
  const completeTaskHandler = (taskId: string) => {
    setTasks((currentTasks) => 
      currentTasks.map((task) => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // delete a task
  const deleteTaskHandler = (taskId: string) => {
    setTasks((currentTasks) => 
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  // toggle task priority
  const togglePriorityHandler = (taskId: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, priority: !task.priority } : task
      )
    );
  };

  // get current date for header
  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // add a new task
  const addTaskHandler = (taskTitle: string) => {
    const newTask: Task = {
      id: Math.random().toString(),
      value: taskTitle,
      completed: false,
      priority: false
    };
    setTasks(currentTasks => [...currentTasks, newTask]);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Header 
          date={getDate()}
          filter={filter}
          onFilterChange={setFilter}
        />
        <TaskInput onAddTask={addTaskHandler} />
        <TaskList 
          tasks={filter === 'Priority' ? tasks.filter(task => task.priority) : tasks} 
          onComplete={completeTaskHandler} 
          onDelete={deleteTaskHandler}
          onTogglePriority={togglePriorityHandler}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 16,
  },
});