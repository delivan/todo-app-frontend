import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import useInput from "../../hooks/useInput";

import styles from "./TodoInput.scss";

const cx = classNames.bind(styles);

function TodoInput({ insertTodo, defaultTodoId }) {
  const { state, setValue } = useInput();
  const todoIdRef = useRef(defaultTodoId || 0);

  const handleInsert = () => {
    if (state.value.trim() === "") {
      return;
    }
    const todo = {
      id: ++todoIdRef.current,
      text: state.value,
      done: false
    };
    insertTodo(todo);
    setValue("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleInsert();
    }
  };

  return (
    <div className={cx("todo-input")}>
      <input
        value={state.value}
        onChange={e => {
          setValue(e.currentTarget.value);
        }}
        onKeyPress={handleKeyPress}
      />
      <div className={cx("add-button")} onClick={handleInsert}>
        추가
      </div>
    </div>
  );
}

TodoInput.propTypes = {
  insertTodo: PropTypes.func,
  defaultTodoId: PropTypes.number
};

export default TodoInput;
