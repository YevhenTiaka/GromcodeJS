/* eslint-disable arrow-body-style */
const baseUrl = 'https://6141977c357db50017b3db7a.mockapi.io/api/v1/tasks';
// eslint-disable-next-line arrow-body-style

// eslint-disable-next-line arrow-body-style

const mapTasks = (tasks) => tasks.map(({ id, ...rest }) => ({ ...rest, id }));

export const getTasksList = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((tasks) => mapTasks(tasks));
};

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;chartset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

// eslint-disable-next-line arrow-body-style
export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;chartset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
