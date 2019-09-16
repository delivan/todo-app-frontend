import { produce } from 'immer';

// 액션 타입 이름의 중첩을 방지하기 위해 접두사로 리듀서 이름을 작성
export const SET_INPUT = 'input/SET_INPUT';
export const initialState = {
  value: ''
};
export default function inputReducer(state, action) {
  switch (action.type) {
    case SET_INPUT:
      const value = action.payload;
      return produce(state, draft => {
        draft.value = value;
      });
    default:
      throw new Error('no exists type');
  }
}