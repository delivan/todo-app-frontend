import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';

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

TodoList.propTypes = {
  todos: PropTypes.instanceOf(Immutable.List),
  handleToggleItem: PropTypes.func,
  handleRemoveItem: PropTypes.func
};