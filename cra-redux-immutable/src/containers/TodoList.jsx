import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from '../components/TodoList';
import * as todosActions from '../modules/todos';

class TodoListContainer extends React.Component {
  handleToggleItem = id => {
    const { TodosActions } = this.props;
    TodosActions.toggle(id);
  }

  handleRemoveItem = (e, id) => {
    const { TodosActions } = this.props;
    e.stopPropagation();
    TodosActions.remove(id);
  }

  render() {
    const { todos } = this.props;
    const { handleToggleItem, handleRemoveItem } = this;
    return (
      <TodoList
        todos={todos}
        handleToggleItem={handleToggleItem}
        handleRemoveItem={handleRemoveItem}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});
const mapDispatchToProps = (dispatch) => ({
  TodosActions: bindActionCreators(todosActions, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);