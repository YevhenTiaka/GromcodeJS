import React, { Component } from 'react';
import Spinner from './Spinner';
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
        {this.state.isLoggedIn ? (
          <Login onLogin={this.handleLogin} />
        ) : (
          <Logout onLogout={this.handleLogout} />
        )}
        <br />
        <Spinner />
      </div>
    );
  }
}

export default Auth;
