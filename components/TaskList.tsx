import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

interface Task {
  id: string;
  value: string;
  completed: boolean;
  priority: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onTogglePriority: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = props => {
  return (
    <View style={styles.listContainer}>
      {props.tasks.length === 0 ? (
        <Text style={styles.emptyText}>No tasks yet :(</Text>
      ) : (
        <FlatList
          data={[...props.tasks].sort((a, b) => Number(a.completed) - Number(b.completed))}
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <TaskItem
              title={itemData.item.value}
              completed={itemData.item.completed}
              priority={itemData.item.priority}
              onComplete={() => props.onComplete(itemData.item.id)}
              onDelete={() => props.onDelete(itemData.item.id)}
              onTogglePriority={() => props.onTogglePriority(itemData.item.id)}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    color: '#888',
    fontSize: 16,
  },
});

export default TaskList;