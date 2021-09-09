import { getItem, setItem } from './storage';
import { renderTasks } from './render';

const inputValue = document.querySelector('.task-input');
export const addTask = () => {
  const tasksList = getItem('tasksList') || [];
  if (inputValue.value !== '') {
    tasksList.push({
      text: inputValue.value,
      done: false,
      id: (Math.random() * 100).toFixed(),
    });
  }
  setItem('tasksList', tasksList);
  renderTasks();
  inputValue.value = '';
};

export const checked = (event) => {
  const tasksList = getItem('tasksList');
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }
  const checkboxId = event.target.dataset.id;

  const filterId = tasksList.find((el) => el.id === checkboxId);

  // eslint-disable-next-line no-unused-expressions
  event.target.checked ? (filterId.done = true) : (filterId.done = false);

  setItem('tasksList', tasksList);

  renderTasks();
};
