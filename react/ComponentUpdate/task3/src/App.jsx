import React from 'react';
import './index.scss';

import Expand from './Expand.jsx';

function App() {
  return (
    <div className="app">
      <Expand title="Some Title">
        <p>
          Hooks are a new addition in React 16.8. They let you use state and other React features
          without writing a class.
        </p>
      </Expand>
    </div>
  );
}

export default App;
