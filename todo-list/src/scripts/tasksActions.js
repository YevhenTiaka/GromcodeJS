import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

const inputValue = document.querySelector('.task-input');

export const addTask = () => {
  const text = inputValue.value;
  if (!text) {
    return;
  }

  inputValue.value = '';

  const newTask = {
    text: inputValue.value,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
// 1. Prepare data
// 2. Write data to database
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
