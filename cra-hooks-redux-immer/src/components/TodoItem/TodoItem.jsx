import React, { useCallback } from 'react';
import PropTyeps from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames/bind';

import * as todosActions from '../../modules/todos';

import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

function TodoItem({ id, done, TodosActions, children }) {
  const handleToggle = useCallback(() => {
    TodosActions.toggle(id);
  }, [TodosActions, id]);

  const handleRemove = useCallback(e => {
    e.stopPropagation();
    TodosActions.remove(id);
  }, [TodosActions, id]);

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
  TodosActions: PropTyeps.object
};

const mapDispatchToProps = dispatch => ({
  TodosActions: bindActionCreators(todosActions, dispatch)
});
export default connect(
  null,
  mapDispatchToProps
)(React.memo(TodoItem));