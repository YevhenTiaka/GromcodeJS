// import React from 'react';

// import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);
ReactDOM.render(greetingElem, rootElement);
