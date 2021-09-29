import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: 'Off',
    };
  }

  handleClick = () => {
    this.state.buttonValue === 'Off'
      ? this.setState({ buttonValue: 'On' })
      : this.setState({ buttonValue: 'Off' });
  };

  render() {
    return (
      <button className='toggler' onClick={this.handleClick}>
        {this.state.buttonValue}
      </button>
    );
  }
}

export default Toggler;
