import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppRouter } from './router/AppRouter';
//import 'bootstrap/dist/css/bootstrap.min.css';

export const App =() =>{
  return (
      <Provider store={ store }>
          <AppRouter />
      </Provider>
  );
}

export default App;
