import { addTask, checked } from './tasksActions';

export const initTodoListHandlers = () => {
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', addTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', checked);
};
