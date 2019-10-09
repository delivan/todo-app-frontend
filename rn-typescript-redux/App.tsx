import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppStack from './src/screens';

import rootReducer from './src/modules';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

export default App;
