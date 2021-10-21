const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';

export const addUser = user => ({
  type: ADD_USER,
  user,
});
export const deleteUser = id => ({
  type: DELETE_USER,
  id,
});
