import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return moment(
    new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset))
  ).format('h:mm:ss: A');
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: getTimeWithOffset(this.props.offset),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: getTimeWithOffset(this.props.offset),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='clock'>
        <div className='clock__location'>{this.props.location}</div>
        <div className='clock__time'>{this.state.date}</div>
      </div>
    );
  }
}

export default Clock;
