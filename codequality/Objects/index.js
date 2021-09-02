//input obj,obj
//output boolean

//compare if numbers leis in obj1 !== numbers keys in obj2 => false
//option bad

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let index = 0; index < keys1.length; index += 1) {
    const key = keys1[index];
    // const key2 = keys2[index];

    const value1 = obj1[key];
    const value2 = obj2[key];
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
}
//good option some

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);

  if (keys1.length !== Object.keys(obj2)) {
    return false;
  }
  return !keys1.some((key) => obj1[key] !== obj2[key]);
}

//     for (let index = 0; index < keys1.length; index += 1) {
//       const key = keys1[index];
//       if (obj1[key] !== obj2[key]) {
//         return false;
//       }
//     }
//     return true;
//   }
// //good option reduce не работает т.к  будет перезаписывать boolean

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   return !keys1.reduce((result, key) => obj1[key] !== obj2[key],false);
// }
const obj1 = {
  age: 17,
  name: 'Tom',
};

const obj2 = {
  name: 'Tom',
  age: 17,
};
console.log(compareObjects(obj1, obj2));

const compareObjects = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};
console.log(JSON.stringify());
console.log(compareObjects(obj1, obj2)); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true

const obj1 = {
    age: 17,
    name: 'Tom',
  };
  
console.log(Object.entries(obj1)