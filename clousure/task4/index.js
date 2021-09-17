/* eslint-disable max-classes-per-file */

class Sportsman {
  constructor(age) {
    this.age = age;
  }
  run() {
    console.log(`${this.name} is runing`);
  }
}
// this внутри класса это весь класс
// this во время вызова метода на каком то объекте будет объект на котором вызывается метод
const sportsman2 = new Sportsman('John');

sportsman2.run();

class Swimmer extends Sportsman {
  constructor(name, swimstyle) {
    super();
    this.name = name;
    this.swimstyle = swimstyle;
  }
  swim() {
    console.log(`${this.name} is swimming ${this.swimstyle}`);
  }
}

const swimObj = new Swimmer('Mike', 'breakstroke');
swimObj.run();
console.log(swimObj);

// class Sportsman {
//   constructor(name) {
//     this.name = name;
//   }
//   // eslint-disable-next-line lines-between-class-members
//   run() {
//     console.log(`${this.name} is running`);
//   }
// }

// class Swimmer extends Sportsman {
//   // eslint-disable-next-line constructor-super
//   constructor(name, breakstroke) {
//     this.name = name;
//     super.breakstroke = breakstroke;
//   }
//   // eslint-disable-next-line constructor-super

//   // eslint-disable-next-line lines-between-class-members
//   swim() {
//     console.log(`${this.name} is swimming ${this.breakstroke}`);
//   }
// }

// const sportsman2 = new Sportsman('john');
// const swimmer2 = new Swimmer('john');
// console.log(sportsman2.run());
// console.log(swimmer2.swim());
