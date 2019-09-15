import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TodoInput from '../components/TodoInput';

import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends React.Component {
  currentId = todosActions.initialTodos.length - 1
  getIncreasedId = () => {
    return ++this.currentId;
  }
  
  handleChange = e => {
    const { value } = e.target;
    const { InputActions } = this.props;
    InputActions.setInput(value);
  }

  handleInsert = () => {
    const { InputActions, TodosActions, value } = this.props;
    if (value.trim() === '') {
      return;
    }
    const todo = {
      id: this.getIncreasedId(),
      text: value,
      done: false
    };
    TodosActions.insert(todo);
    InputActions.setInput('');
  }

  render() {
    const { value } = this.props;
    const { handleChange, handleInsert } = this;
    return (
      <TodoInput
        value={value}
        handleChange={handleChange}
        handleInsert={handleInsert}
      />
    );
  }
}

TodoInputContainer.propTypes = {
  value: PropTypes.string,
  InputActions: PropTypes.object,
  TodosActions: PropTypes.object,
};

const mapStateToProps = state => ({
  value: state.input.value
});
const mapDispatchToProps = dispatch => ({
  InputActions: bindActionCreators(inputActions, dispatch),
  TodosActions: bindActionCreators(todosActions, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInputContainer);