import React from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

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