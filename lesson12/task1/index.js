function getUsersList() {
  return fetch('https://6141977c357db50017b3db7a.mockapi.io/api/v1/users').then(
    (request) => request.json()
  );
}

function getUserById(userId) {
  return fetch(
    `https://6141977c357db50017b3db7a.mockapi.io/api/v1/users/${userId}`
  ).then((request) => request.json());
}

function createUser(userData) {
  return fetch(`https://6141977c357db50017b3db7a.mockapi.io/api/v1/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;chartset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

function deleteUser(userId) {
  return fetch(
    `https://6141977c357db50017b3db7a.mockapi.io/api/v1/users/${userId}`,
    {
      method: 'DELETE',
    }
  );
}

function updateUser(userId, userData) {
  return fetch(
    `https://6141977c357db50017b3db7a.mockapi.io/api/v1/users/${userId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;chartset=utf-8',
      },
      body: JSON.stringify(userData),
    }
  );
}

// examples
getUsersList().then((users) => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('1').then((userData) => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

createUser(newUserData).then(() => {
  console.log('User created');
});

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

updateUser('1', updatedUserData).then(() => {
  console.log('User updated');
});

deleteUser('5').then(() => {
  console.log('User updated');
});
