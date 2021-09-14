import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList } from './tasksGateway.js';

export const checked = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }
  const tasksList = getItem('taskList');
  const taskId = e.target.dataset.id;
  const { text, CreateDate } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;
  const updatedTask = {
    text,
    CreateDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };
  updatedTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
// Prepare data
// updata data from server
// read new data from server
// save new data to front-end storage
// Update UI based on new data
