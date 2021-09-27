import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './styles.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firtsName='John'
    lastName='Doe'
    birthDate={new Date('2001-01-01T11:11:11.819Z')}
  />,
  rootElement
);
