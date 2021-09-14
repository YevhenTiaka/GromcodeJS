/* eslint-disable arrow-body-style */
const baseUrl =
  'https://crudcrud.com/api/862f29e7ccd5435eb2dc4e1699534391/tasks';
// eslint-disable-next-line arrow-body-style

const mapTasks = (tasks) =>
  tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));

export const getTasksList = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((tasks) => mapTasks(tasks));
};
// eslint-disable-next-line arrow-body-style
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
export const deleteeTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
