import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

function TodoItem({ id, done, toggle, remove, children }) {
  const handleRemove = e => {
    e.stopPropagation();
    remove(id);
  };

  return (
    <div className={cx('todo-item')} onClick={() => toggle(id)}>
      <div className={cx('delete-button')} onClick={handleRemove}>삭제</div>
      <div className={cx('text', {done})}>{children}</div>
      <input className={cx('checker')} type="checkbox" checked={done} readOnly/>
    </div>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number,
  done: PropTypes.bool,
  toggle: PropTypes.func,
  remove: PropTypes.func
};

export default React.memo(TodoItem);