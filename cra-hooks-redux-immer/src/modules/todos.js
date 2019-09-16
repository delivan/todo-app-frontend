import { produce } from 'immer';

export const INSERT = 'todos/INSERT';
export const TOGGLE = 'todos/TOGGLE';
export const REMOVE = 'todos/REMOVE';
export const initialTodos = [
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
    text: 'Redux 적용하기',
    done: true
  },
  {
    id: 3,
    text: 'Immer.js 적용하기',
    done: true
  }
];

export default function todosReducer(state, action) {
  switch (action.type) {
    case INSERT: {
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
    case TOGGLE: {
      const { payload: id } = action;

      const index = state.findIndex(todo => todo.id === id);
      return produce(state, draft => {
        draft[index].done = !draft[index].done;
      });
    }
    case REMOVE: {
      const { payload: id } = action;

      const index = state.findIndex(todo => todo.id === id);
      return produce(state, draft => {
        draft.splice(index, 1);
      });
    }
    default: 
      throw new Error('no exists type');
  }
}