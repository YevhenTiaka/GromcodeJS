import React from 'react';
import ReactDOM from 'react-dom';
import Dimensions from './Dimensions';

const rootElement = document.querySelector('#root');
const titleElement = document.querySelector('title');

ReactDOM.render(<Dimensions />, rootElement);
ReactDOM.render(<Dimensions />, titleElement);
