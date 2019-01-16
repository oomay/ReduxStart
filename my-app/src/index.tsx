import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducers } from 'src/Reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './Router';

const store = createStore(reducers,  composeWithDevTools());

 
ReactDOM.render(
  <Provider store={store}>
  <>
  <AppRouter />
  </>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
