import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './Router';

import { reducers } from 'src/States';

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
