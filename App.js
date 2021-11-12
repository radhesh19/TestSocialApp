/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import RootNaviagtion from './src/Navigation/navigation';
const store = configureStore();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <RootNaviagtion />      
    </Provider>
  );
};

export default App;
