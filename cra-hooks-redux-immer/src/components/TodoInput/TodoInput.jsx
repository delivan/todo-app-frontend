import React, { useReducer, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import inputReducer, { initialState, SET_INPUT } from '../../modules/input'; 
import { initialTodos ,INSERT } from '../../modules/todos'; 

import styles from './TodoInput.scss';

const cx = classNames.bind(styles);

function TodoInput({ todosDispatch }) {
  const [state, inputDispatch] = useReducer(inputReducer, initialState);
  const todoIdRef = useRef(initialTodos.length - 1);

  const handleChange = useCallback(e => {
    const { value } = e.target;
    inputDispatch({ type: SET_INPUT, payload: value });
  }, [inputDispatch]);

  const handleInsert = useCallback(() => {
    if (state.value.trim() === '') {
      return;
    }
    const todo = {
      id: ++todoIdRef.current,
      text: state.value,
      done: false
    };
    todosDispatch({ type: INSERT, payload: todo });
    inputDispatch({ type: SET_INPUT, payload: '' });
  }, [todosDispatch, inputDispatch, todoIdRef, state.value]);

  const handleKeyPress = useCallback(e => {
    if (e.key === 'Enter') {
      handleInsert();
    }
  }, [handleInsert]);

  return (
    <div className={cx('todo-input')}>
      <input value={state.value} onChange={handleChange} onKeyPress={handleKeyPress}/>
      <div className={cx('add-button')} onClick={handleInsert}>추가</div>
    </div>  
  );
}

TodoInput.propTypes = {
  todosDispatch: PropTypes.func
};

export default TodoInput;