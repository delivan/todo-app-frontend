import React from 'react';
import PropTyeps from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

class TodoItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.done !== nextProps.done;
  }

  render() { 
    const { done, handleToggle, handleRemove, children } = this.props;
    return (
      <div className={cx('todo-item')} onClick={handleToggle}>
        <div className={cx('delete-button')} onClick={(e) => {
          e.stopPropagation();
          handleRemove();
        }}>삭제</div>
        <div className={cx('text', {done})}>{children}</div>
        <input className={cx('checker')} type="checkbox" checked={done} readOnly/>
      </div>
    );
  }
}

TodoItem.propTypes = {
  done: PropTyeps.bool,
  handleToggle: PropTyeps.func,
  handleRemove: PropTyeps.func
};

export default TodoItem;