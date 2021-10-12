import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Auth />, rootElement);

// input obj( props)

// output dom elem(jsx)

// Algo
// Show login by default
// after loginClick - hide Login btn and show Spinner for 2 sec's.
// after 2 sec's hide spinner and show Logout
// after LogoutClick - hide Logout and show Login

// 0. Make layout
// 1. split on components
// 2. static version in React
// 3. declare state and props
// 4. write logic
