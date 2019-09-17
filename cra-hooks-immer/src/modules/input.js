import { produce } from 'immer';

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
      throw new Error('Invalid action type');
  }
}