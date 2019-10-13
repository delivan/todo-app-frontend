import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import useTodos from '../../hooks/useTodos';
import { Todo } from '../../modules/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});

function TodoList() {
  const { todos } = useTodos();
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={(item: Todo) => `${item.id}`}
        renderItem={({ item }: { item: Todo }) => <Text>{item.text}</Text>}
      />
    </View>
  );
}

export default TodoList;
