import React from 'react';
import Loader from 'react-loader-spinner';
const Spinner = (props) => {
  return (
    <Loader type='Oval' color='black' height={50} width={50} timeout={2000} />
  );
};

export default Spinner;
