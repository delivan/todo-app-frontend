import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PageTemplate({ children }) {
  return (
    <div className={cx('page-template')}>
      <h1>Todo App Frontend</h1>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;