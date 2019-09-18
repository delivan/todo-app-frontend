import { useReducer } from 'react';
import { produce } from 'immer';

const types = {
  setValue: 'input/SET_VALUE'
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case types.setValue:
      const value = action.payload;
      return produce(state, draft => {
        draft.value = value;
      });
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

const defaultState = {
  value: ''
};

export default function useInput(initialState = defaultState) {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const setValue = val => dispatch({ type: types.setValue, payload: val });

  return {state, setValue};
}