import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import useHomeScreen from '../../hooks/useHomeScreen';

import TodoList from '../TodoList';
import TodoInput from '../TodoInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 30,
  },
  desc: {
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: 14,
    color: 'pink',
  },
});

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App Frontend</Text>
      <Text style={styles.desc}>skills: React Native, Typescript, Redux</Text>
      <TodoInput />
      <TodoList />
    </View>
  );
}

export default HomeScreen;
