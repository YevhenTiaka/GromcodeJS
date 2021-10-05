import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true,
    };
  }
  onToggle = (event) => {
    const { onLine } = event.target.navigator;
    this.setState({
      online: onLine,
    });
  };

  componentDidMount() {
    window.addEventListener('online', this.onToggle);
    window.addEventListener('offline', this.onToggle);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onToggle);
    window.removeEventListener('offline', this.onToggle);
  }

  render() {
    if (this.state.online) {
      return <div className='status'>online</div>;
    } else {
      return <div className='status status_offline'>offline</div>;
    }
  }
}

export default ConnectionStatus;
