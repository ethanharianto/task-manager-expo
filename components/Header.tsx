import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  date: string;
  filter: string;
  onFilterChange: (filter: string) => void;
}

const Header: React.FC<HeaderProps> = ({ date, filter, onFilterChange }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="list" size={24} color="#7c4dff" />
          </View>
          <Text style={styles.title}>To Do</Text>
        </View>
        <View style={styles.dateContainer}>
          <Ionicons name="calendar-outline" size={16} color="#666" />
          <Text style={styles.date}>{date}</Text>
          <TouchableOpacity onPress={() => onFilterChange(filter === 'All Tasks' ? 'Priority' : 'All Tasks')}>
            <View style={styles.filterContainer}>
              <Ionicons name="filter" size={16} color="#666" />
              <Text style={styles.filterText}>{filter}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
  },
  headerTop: {
    gap: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconContainer: {
    backgroundColor: '#FFF2E6',
    padding: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  date: {
    color: '#666',
    fontSize: 14,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginLeft: 'auto',
  },
  filterText: {
    color: '#666',
    fontSize: 14,
  },
});

export default Header;