import React, { useState } from 'react';

import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return moment(
    new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset))
  ).format('h:mm:ss A');
};
const Clock2 = (props) => {
  const [state, setState] = useState(getTimeWithOffset(props.offset));
  setInterval(() => {
    setState(getTimeWithOffset(props.offset));
  }, 1000);

  return (
    <div className='clock'>
      <div className='clock__location'>{props.location}</div>
      <div className='clock__time'>{state}</div>
    </div>
  );
};
export default Clock2;
