import React, { useState, useEffect } from 'react';
import Clock from './Clock';

const App = () => {
  const [visibility, setVisibility] = useState({
    visibility: true,
  });

  return (
    <div className="clock">
      {visibility && <Clock location={'New York'} offset={-5} />}
      <button className="btn" onClick={() => setVisibility(true)}>
        Show
      </button>
      <button className="btn" onClick={() => setVisibility(false)}>
        Hide
      </button>
    </div>
  );
};

export default App;
