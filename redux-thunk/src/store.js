import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducers'
// Note: this API requires redux@>=3.1.0
const store = createStore(
  todoApp,
  applyMiddleware(thunk)
);
export default store