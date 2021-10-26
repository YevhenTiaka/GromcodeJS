import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter/counter.reducer';
import { userReducer } from './users/users.reducer';

const reducer = combineReducers({
  users: userReducer,
  counter: counterReducer,
});

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
