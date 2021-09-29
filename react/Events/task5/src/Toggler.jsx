import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: 'Off',
    };
  }
  toggle = () => {
    this.state.buttonValue === 'Off'
      ? this.setState({ buttonValue: 'On' })
      : this.setState({ buttonValue: 'Off' });
  };

  render() {
    return (
      <button className='button' onClick={this.toggle}>
        {this.state.buttonValue}
      </button>
    );
  }
}

export default Toggler;
