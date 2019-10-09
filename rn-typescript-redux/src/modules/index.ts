import { combineReducers } from 'redux';

import homeScreen from './homeScreen';

const rootReducer = combineReducers({
  homeScreen,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
