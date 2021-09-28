import React from 'react';
import Clock from './Clock';
import Clock2 from './Clock2';

const App = () => {
  return (
    <>
      <Clock location={'New York'} offset={-5} />
      <Clock location={'Kiev'} offset={2} />
      <Clock location={'London'} offset={0} />
      <Clock2 location={'Reni'} offset={4} />
    </>
  );
};

export default App;
