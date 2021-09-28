// input
// output undefined

// input  fetch url (string),obj, headers)
// output  fetch obj Promise
function saveUser(userData) {
  const res = fetch(
    'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }
  )
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
    })
    .catch((e) => {});

  // input callback
  // output promise
  console.log(res);
}

const user = {
  email: 'test@gmail.ru',
  firstName: 'Tom',
  lastName: 'Johnson',
  city: 'Cape Town',
  age: 20,
};

saveUser(user);
console.log(JSON.stringify(user));
