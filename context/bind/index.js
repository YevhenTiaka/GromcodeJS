// 'use strict';
function printMessage(country, city) {
  console.log(this);

  console.log(
    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
  );
}
// input context ,agr1,...argN
// output func

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};
// option 1
printMessage.bind(user)('Ukraine', 'Lviv');

// // option 2
// const printMessageBinded2 = printMessage.bind(user, 'UK', 'London');
// printMessageBinded2();

// // option 3
// const printMessageBinded3 = printMessage.bind(user, 'Poland');
// printMessageBinded3('Warsaw');
// // каждый вызов bind() создает новую функцию

// // input func,context,args...argsN
// // output func
function myBind(func, context, ...args) {
  // call
  // input context , arg1 ...argN
  // output // func result

  // input the same as func
  // output func result
  return function (...funcArgs) {
    func.call(context, ...args, ...funcArgs);
  };
}
// test data
const test = myBind(printMessage, user);
test('TK', 'Istanbul');
