/* eslint-disable max-classes-per-file */
class Sportsman {
  constructor(name) {
    this.name = name;
    console.log(name);
  }
  // eslint-disable-next-line lines-between-class-members
  run() {
    console.log(`${this.name} is running`);
  }
}

class Swimmer {
  constructor(breakstroke) {
    this.breakstroke = breakstroke;
  }
  // eslint-disable-next-line lines-between-class-members
  swim() {
    console.log(`${this.name} is swimming ${this.breakstroke}`);
  }
}

const sportsman2 = new Sportsman();

console.log(sportsman2.run());
