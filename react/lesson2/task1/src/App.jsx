import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={1} interval={500} />
      <Counter start={7} interval={200} />
    </>
  );
};

export default App;
