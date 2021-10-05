import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { online: window.navigator.onLine };
  }
  componentDidMount() {
    window.addEventListener('online', this.handleNetworkChange);
    window.addEventListener('offline', this.handleNetworkChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleNetworkChange);
    window.removeEventListener('offline', this.handleNetworkChange);
  }

  handleNetworkChange = () => {
    this.setState({ online: window.navigator.onLine });
  };
  render() {
    if (this.state.online) {
      return <div className='status'>online</div>;
    } else {
      return <div className='status status_offline'>offline</div>;
    }
  }
}

export default ConnectionStatus;
