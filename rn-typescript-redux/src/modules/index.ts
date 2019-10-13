import { combineReducers } from 'redux';

import homeScreen from './homeScreen';
import todos from './todos';

const rootReducer = combineReducers({
  homeScreen,
  todos,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
