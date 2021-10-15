import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [online, setOnline] = useState({
    online: true,
  });
  useEffect(() => {
    const handleNetworkChange = event => {
      setOnline(event.target.navigator.onLine);
    };

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);
    return () => {
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  return online ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );
};

export default ConnectionStatus;
