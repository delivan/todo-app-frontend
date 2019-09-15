import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TodoInput.scss';

const cx = classNames.bind(styles);

export default function TodoInput({
  value,
  handleChange,
  handleInsert
}) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleInsert();
    }
  };

  return (
    <div className={cx('todo-input')}>
      <input value={value} onChange={handleChange} onKeyPress={handleKeyPress}/>
      <div className={cx('add-button')} onClick={handleInsert}>추가</div>
    </div>  
  );
}

TodoInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleInsert: PropTypes.func
};