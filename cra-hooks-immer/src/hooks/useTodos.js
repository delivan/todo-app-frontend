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
  switch (action.type) {
    case types.insert: {
      const { id, text, done } = action.payload;
      const todo = {
        id,
        text,
        done
      };
  
      return produce(state, draft => {
        draft.push(todo);
      });
    }
    case types.toggle: {
      const { payload: id } = action;

      const index = state.findIndex(todo => todo.id === id);
      return produce(state, draft => {
        draft[index].done = !draft[index].done;
      });
    }
    case types.remove: {
      const { payload: id } = action;

      const index = state.findIndex(todo => todo.id === id);
      return produce(state, draft => {
        draft.splice(index, 1);
      });
    }
    default: 
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

export default function useTodos(initialTodos = defaultTodos) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  const insertTodo = useCallback(todo => dispatch({ type: types.insert, payload: todo }), []);
  const toggleTodo = useCallback(id => dispatch({ type: types.toggle, payload: id }), []);
  const removeTodo = useCallback(id => dispatch({ type: types.remove, payload: id }), []);

  return {todos, insertTodo, toggleTodo, removeTodo};
}