import React from 'react';

const Login = (onLogin) => {
  return (
    <button className='btn login' onClick={onLogin.onLogin}>
      Login
    </button>
  );
};

export default Login;
