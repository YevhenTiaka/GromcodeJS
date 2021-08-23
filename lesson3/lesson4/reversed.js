//reverse---------------------

export const reverseArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = [...arr].reverse();
  return result;
};
//withdraw----------------------
export const withdraw = (clients, balances, client, amount) => {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] >= amount) {
    return (balances[indexOfPerson] -= amount);
  } else if (balances[indexOfPerson] <= amount) {
    return -1;
  }
};
// filtration object-------------
export const getAdults = (obj) => {
  const newObj = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
