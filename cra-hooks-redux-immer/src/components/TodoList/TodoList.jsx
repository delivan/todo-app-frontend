import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem';

function TodoList({ todos, todosDispatch }) {
  const todoList = todos.map(todo => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      done={todo.done}
      todosDispatch={todosDispatch}
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
  todosDispatch: PropTypes.func
};

export default TodoList;