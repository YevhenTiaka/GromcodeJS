const calc = (initialValue) => {
  let result = initialValue;
  const calculator = {
    add(value) {
      result += value;
      return console.log(this);
    },
    mult(value) {
      result *= value;
      return this;
    },
  };
};

calc(2);
