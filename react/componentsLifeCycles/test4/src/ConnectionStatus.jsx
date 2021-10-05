import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: 'true',
    };
  }
  toggle = () => {
    const { online } = event.target.navigator;
    this.setState({
      online: online,
    });
  };
  componentDidMount() {
    window.addEventListener('online', this.toggle);
    window.addEventListener('offline', this.toggle);
  }
  componentWillUnmount() {
    window.removeEventListener('online', this.toggle);
    window.removeEventListener('offline', this.toggle);
  }

  render() {
    return this.state.online === 'online' ? (
      <div className='status status_offline'>offline</div>
    ) : (
      <div className='status '>online</div>
    );
  }
}

export default ConnectionStatus;
