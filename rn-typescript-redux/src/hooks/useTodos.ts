import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../modules';
import { addTodo, removeTodo, toggleTodo } from '../modules/todos';

export default function useTodos() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  return { todos };
}
