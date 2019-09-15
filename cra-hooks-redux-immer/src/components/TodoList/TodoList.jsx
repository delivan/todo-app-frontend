import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem';

function TodoList({ todos }) {
  const todoList = todos.map(todo => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      done={todo.done}
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
  todos: PropTypes.array
};

const mapStateToProps = state => ({
  todos: state.todos
});
export default connect(
  mapStateToProps,
  null,
)(TodoList);