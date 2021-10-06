import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const users = [
  { id: 'id-1', name: 'Tom', age: 20 },

  { id: 'id-2', name: 'Tomy', age: 21 },

  { id: 'id-3', name: 'Bom', age: 22 },

  { id: 'id-4', name: 'Zom', age: 25 },

  { id: 'id-5', name: 'Bob', age: 54 },
  ,
  { id: 'id-6', name: 'Andy', age: 34 },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);
