import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { reducers } from 'src/Reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import rootSaga from './rootSaga';
import AppRouter from './Router';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,  composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
sagaMiddleware.run(rootSaga);


 
ReactDOM.render(
  <Provider store={store}>
  <>
  <AppRouter />
  </>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
