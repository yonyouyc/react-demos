import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoApp from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
// Note: this API requires redux@>=3.1.0
const store = createStore(
  todoApp,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)
export default store