import React from 'react';
import PropTyeps from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

export default function TodoItem({ 
  done,
  handleToggle,
  handleRemove,
  children
}) {
  return (
    <div className={cx('todo-item')} onClick={handleToggle}>
      <div className={cx('delete-button')} onClick={handleRemove}>삭제</div>
      <div className={cx('text', {done})}>{children}</div>
      <input className={cx('checker')} type="checkbox" checked={done} readOnly/>
    </div>
  );
}

TodoItem.propTypes = {
  done: PropTyeps.bool,
  handleToggle: PropTyeps.func,
  handleRemove: PropTyeps.func
};