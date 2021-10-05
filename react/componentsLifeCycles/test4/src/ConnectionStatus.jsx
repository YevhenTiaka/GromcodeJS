import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { online: window.navigator.onLine };
  }
  componentDidMount() {
    window.addEventListener('offline', this.handleNetworkChange);
    window.addEventListener('online', this.handleNetworkChange);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.handleNetworkChange);
    window.removeEventListener('online', this.handleNetworkChange);
  }

  handleNetworkChange = () => {
    this.setState({ online: window.navigator.onLine });
  };
  render() {
    return this.state.online ? (
      <div className='status '>online</div>
    ) : (
      <div className='status status_offline'>offline</div>
    );
  }
}

export default ConnectionStatus;
