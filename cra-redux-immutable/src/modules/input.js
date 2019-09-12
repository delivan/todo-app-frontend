import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션 타입 이름의 중첩을 방지하기 위해 접두사로 리듀서 이름을 작성
const SET_INPUT = 'input/SET_INPUT';

export const setInput = createAction(SET_INPUT);

const initialValue = Map({
  value: ''
});

export default handleActions({
  [SET_INPUT]: (state, action) => {
    return state.set('value', action.payload);
  }
}, initialValue);