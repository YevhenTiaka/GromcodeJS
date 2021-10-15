import React, { useState, useEffect } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return moment(new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset))).format(
    'h:mm:ss A',
  );
};

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(getTimeWithOffset(offset));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeWithOffset(offset));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({
//         time: getTimeWithOffset(this.props.offset),
//       });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

export default Clock;
