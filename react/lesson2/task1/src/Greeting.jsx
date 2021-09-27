import moment from 'moment';
import React from 'react';

const rootElement = document.querySelector('#root');
const Greeting = (props) => {
  const age = moment().diff(moment(props.birthDate), 'Years');
  return (
    <div className='greeting'>{`My name is ${props.firstName}  ${props.lastName} . I'm ${age} years old`}</div>
  );
};
export default Greeting;
