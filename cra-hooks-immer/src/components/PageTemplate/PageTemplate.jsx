import React from 'react';
import classNames from 'classnames/bind';

import styles from './PageTemplate.scss';

const cx = classNames.bind(styles);

export default function PageTemplate({ children }) {
  return (
    <div className={cx('page-template')}>
      <h1>Todo App Frontend</h1>
      <p>skills: CRA(with React Hooks), Immer.js </p>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  );
};