import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TaskItemProps {
  title: string;
  completed: boolean;
  priority: boolean;
  onComplete: () => void;
  onDelete: () => void;
  onTogglePriority: () => void;
  startTime?: string;
  endTime?: string;
  hasLink?: boolean;
}

const TaskItem: React.FC<TaskItemProps> = props => {
  return (
    <View style={[
      styles.taskItem,
      props.completed ? styles.completedTask : null
    ]}>
      <TouchableOpacity 
        style={styles.checkCircle}
        activeOpacity={0.8} 
        onPress={props.onComplete}
      >
        {props.completed && (
          <Ionicons name="checkmark" size={18} color="#7c4dff" />
        )}
      </TouchableOpacity>
      <View style={styles.taskContent}>
        <Text style={[
          styles.taskText,
          props.completed ? styles.completedTaskText : null
        ]}>
          {props.title}
        </Text>
        {(props.startTime && props.endTime) && (
          <Text style={styles.timeText}>
            {props.startTime} - {props.endTime}
          </Text>
        )}
      </View>
      {props.hasLink && (
        <Ionicons name="link" size={20} color="#8E8E93" />
      )}
      <TouchableOpacity 
        style={styles.priorityButton}
        onPress={props.onTogglePriority}
        activeOpacity={0.7}
      >
        <Ionicons name={props.priority ? "star" : "star-outline"} size={20} color="#FFD700" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={props.onDelete}
        activeOpacity={0.7}
      >
        <Ionicons name="trash-outline" size={20} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#7c4dff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  taskContent: {
    flex: 1,
    marginLeft: 12,
  },
  timeText: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 4,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: '#000000',
  },
  completedTaskText: {
    color: '#8E8E93',
  },
  completedTask: {
    opacity: 0.8,
  },
  priorityButton: {
    padding: 8,
    marginLeft: 8,
  },
  deleteButton: {
    marginLeft: 12,
    padding: 8,
  },
});

export default TaskItem;