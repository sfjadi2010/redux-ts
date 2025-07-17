import { Provider } from 'react-redux';
import { store } from './state';

import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
      </Provider>
    </>
  )
}

export default App;
