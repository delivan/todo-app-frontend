import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem';

function TodoList({ todos, toggleTodo, removeTodo }) {
  const todoList = todos.map(todo => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      done={todo.done}
      toggle={toggleTodo}
      remove={removeTodo}
    >
      {todo.text}
    </TodoItem>
  ));

  return (
    <div>
      {todoList}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  removeTodo: PropTypes.func
};

export default TodoList;