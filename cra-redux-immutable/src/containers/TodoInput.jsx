import React from 'react';
import TodoInput from '../components/TodoInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends React.Component {
  id = 1
  getIncreasedId = () => {
    return ++this.id;
  }
  
  handleChange = (e) => {
    const { value } = e.target;
    const { InputActions } = this.props;
    InputActions.setInput(value);
  }

  handleInsert = () => {
    const { InputActions, TodosActions, value } = this.props;
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

const mapStateToProps = (state) => ({
  value: state.input.get('value')
});
const mapDispatchToProps = (dispatch) => ({
  InputActions: bindActionCreators(inputActions, dispatch),
  TodosActions: bindActionCreators(todosActions, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInputContainer);