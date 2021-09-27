import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const element = React.createElement('h1', { className: 'title' }, 'Todo List!');
ReactDOM.render(element, rootElement);
// should render following html

//<h1 class="title">Todo List</h1>
let arr = ['1', '2', 4];
console.log(JSON.stringify(arr));
