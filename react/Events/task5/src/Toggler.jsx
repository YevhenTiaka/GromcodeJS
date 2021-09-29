import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'Off',
    };
  }

  toggle() {
    this.state.input === 'Off'
      ? this.setState({
          input: 'On',
        })
      : this.setState({
          input: 'Off',
        });
  }

  render() {
    return (
      <button className='toggler' onClick={() => this.toggle()}>
        {this.state.input}
      </button>
    );
  }
}

export default Toggler;
