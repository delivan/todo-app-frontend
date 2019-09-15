import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem';

export default function TodoList({
  todos,
  handleToggleItem,
  handleRemoveItem
}) {
  const todoList = todos.map(todo => (
    <TodoItem
      key={todo.id}
      done={todo.done}
      handleToggle={() => handleToggleItem(todo.id)}
      handleRemove={() => handleRemoveItem(todo.id)}
    >
      {todo.text}
    </TodoItem>
  ));

  return (
    <div>
      {todoList}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  handleToggleItem: PropTypes.func,
  handleRemoveItem: PropTypes.func
};