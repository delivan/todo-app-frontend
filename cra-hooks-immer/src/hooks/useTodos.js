import { useReducer, useCallback } from 'react';
import { produce } from 'immer';

const defaultTodos = [
  {
    id: 0,
    text: 'Creact React App 적용하기',
    done: true
  }, 
  {
    id: 1,
    text: 'React Hooks 적용하기',
    done: true
  },
  {
    id: 2,
    text: 'Immer.js 적용하기',
    done: true
  }
];

const types = {
  insert: 'todos/INSERT',
  toggle: 'todos/TOGGLE',
  remove: 'todos/REMOVE'
};

const todosReducer = (state, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.insert: {
        const { id, text, done } = action.payload;

        const todo = {
          id,
          text,
          done
        };
        draft.push(todo);
        break;
      }
      case types.toggle: {
        const { payload: id } = action;

        const index = state.findIndex(todo => todo.id === id);
        draft[index].done = !draft[index].done;
        break;
      }
      case types.remove: {
        const { payload: id } = action;

        const index = state.findIndex(todo => todo.id === id);
        draft.splice(index, 1);
        break;
      }
      default: 
        throw new Error(`Invalid action type: ${action.type}`);
    }
  });
};

export default function useTodos(initialTodos = defaultTodos) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const defaultTodoId = initialTodos.length - 1;

  const insertTodo = useCallback(todo => dispatch({ type: types.insert, payload: todo }), []);
  const toggleTodo = useCallback(id => dispatch({ type: types.toggle, payload: id }), []);
  const removeTodo = useCallback(id => dispatch({ type: types.remove, payload: id }), []);

  return {todos, defaultTodoId, insertTodo, toggleTodo, removeTodo};
}