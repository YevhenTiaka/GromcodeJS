/* eslint-disable arrow-body-style */
// eslint-disable-next-line arrow-body-style
export const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};
export const fetchRepositories = (url) =>
  fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
