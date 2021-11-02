import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './tasks/tasks.reducer';
const reducer = combineReducers({
  tasks: tasksReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
