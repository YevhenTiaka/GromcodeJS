import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { online: true };
  }
  componentDidMount() {
    window.addEventListener('online', this.handleNetworkChange);
    window.addEventListener('offline', this.handleNetworkChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleNetworkChange);
    window.removeEventListener('offline', this.handleNetworkChange);
  }
  handleNetworkChange = (event) => {
    const { onLine } = event.target.navigator;
    this.setState({
      online: onLine,
    });
  };

  render() {
    return this.state.online ? (
      <div className='status'>online</div>
    ) : (
      <div className='status status_offline'>offline</div>
    );
  }
}

export default ConnectionStatus;
