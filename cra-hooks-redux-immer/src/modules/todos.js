import { produce } from 'immer';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);
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

export default handleActions({
  [INSERT]: (state, action) => {
    const { id, text, done } = action.payload;
    const todo = {
      id,
      text,
      done
    };

    return produce(state, draft => {
      draft.push(todo);
    });
  },
  [TOGGLE]: (state, action) => {
    const { payload: id } = action;

    const index = state.findIndex(todo => todo.id === id);
    return produce(state, draft => {
      draft[index].done = !draft[index].done;
    });
  },
  [REMOVE]: (state, action) => {
    const { payload: id } = action;

    const index = state.findIndex(todo => todo.id === id);
    return produce(state, draft => {
      draft.splice(index, 1);
    });
  } 
}, initialTodos);