import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  render() {
    return (
      <div className='panel'>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Login onLogin={this.handleLogin} />
        ) : (
          <Logout onLogout={this.handleLogout} />
        )}
      </div>
    );
  }
}

export default Auth;
