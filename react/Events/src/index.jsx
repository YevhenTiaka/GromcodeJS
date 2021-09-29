import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import GoodButton from './GoodButton';
const rootElement = document.querySelector('#root');
console.log(rootElement);

ReactDOM.render(<GoodButton />, rootElement);
