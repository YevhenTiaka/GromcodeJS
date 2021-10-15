import React, { useState } from 'react';
import Dimensions from './Dimensions';

const Demo = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <div>
      <div>
        <button className="btn" onClick={() => setVisible(true)}>
          Show
        </button>
        <button className="btn" onClick={() => setVisible(false)}>
          Hide
        </button>
      </div>
      {isVisible && <Dimensions />}
    </div>
  );
};
export default Demo;
