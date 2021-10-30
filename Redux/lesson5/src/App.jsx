import React from 'react';
import { Provider } from 'react-redux';

import UsersList from './users/UsersList.jsx';
import store from './store';

const App = () => (
  <Provider store={store}>
    <UsersList />
  </Provider>
);

export default App;
