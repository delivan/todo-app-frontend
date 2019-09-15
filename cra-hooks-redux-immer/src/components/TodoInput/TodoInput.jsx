import React, { useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import * as inputActions from '../../modules/input';
import * as todosActions from '../../modules/todos';

import styles from './TodoInput.scss';

const cx = classNames.bind(styles);

function TodoInput({
  value,
  InputActions,
  TodosActions
}) {
  const todoIdRef = useRef(todosActions.initialTodos.length - 1);

  const handleChange = useCallback(e => {
    const { value } = e.target;
    InputActions.setInput(value);
  }, [InputActions]);

  const handleInsert = useCallback(e => {
    if (value.trim() === '') {
      return;
    }
    const todo = {
      id: ++todoIdRef.current,
      text: value,
      done: false
    };
    TodosActions.insert(todo);
    InputActions.setInput('');
  }, [InputActions, TodosActions, todoIdRef, value]);

  const handleKeyPress = useCallback(e => {
    if (e.key === 'Enter') {
      handleInsert();
    }
  }, [handleInsert]);

  return (
    <div className={cx('todo-input')}>
      <input value={value} onChange={handleChange} onKeyPress={handleKeyPress}/>
      <div className={cx('add-button')} onClick={handleInsert}>추가</div>
    </div>  
  );
}

TodoInput.propTypes = {
  value: PropTypes.string,
  currentId: PropTypes.number,
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
)(TodoInput);