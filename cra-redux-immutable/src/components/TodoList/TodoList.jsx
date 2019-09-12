import React from 'react';
import TodoItem from '../TodoItem';

export default function TodoList({
  todos,
  handleToggleItem,
  handleRemoveItem
}) {
  const todoList = todos.map(todo => (
    <TodoItem
      key={todo.get('id')}
      done={todo.get('done')}
      handleToggle={() => handleToggleItem(todo.get('id'))}
      handleRemove={(e) => handleRemoveItem(e, todo.get('id'))}
    >
      {todo.get('text')}
    </TodoItem>
  ));

  return (
    <div>
      {todoList}
    </div>
  )
}