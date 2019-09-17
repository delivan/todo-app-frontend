import React, { useCallback } from 'react';
import PropTyeps from 'prop-types';
import classNames from 'classnames/bind';

import { TOGGLE, REMOVE } from '../../modules/todos';
import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

function TodoItem({ id, done, todosDispatch, children }) {
  const handleToggle = useCallback(() => {
    todosDispatch({ type: TOGGLE, payload: id });
  }, [todosDispatch, id]);

  const handleRemove = useCallback(e => {
    e.stopPropagation();
    todosDispatch({ type: REMOVE, payload: id });
  }, [todosDispatch, id]);

  return (
    <div className={cx('todo-item')} onClick={handleToggle}>
      <div className={cx('delete-button')} onClick={handleRemove}>삭제</div>
      <div className={cx('text', {done})}>{children}</div>
      <input className={cx('checker')} type="checkbox" checked={done} readOnly/>
    </div>
  );
}

TodoItem.propTypes = {
  id: PropTyeps.number,
  done: PropTyeps.bool,
  todosDispatch: PropTyeps.func
};

export default React.memo(TodoItem);