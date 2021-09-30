import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  spinnerOn = () => {
    this.setState({
      isLoggedIn: null,
    });

    setTimeout(() => this.handleLogin(), 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    if (this.state.isLoggedIn === null) {
      return (
        <div className='panel'>
          <Spinner size={50} />
        </div>
      );
    } else {
      return (
        <div className='panel'>
          {this.state.isLoggedIn ? (
            <Logout onLogout={this.handleLogout} />
          ) : (
            <Login onLogin={this.spinnerOn} />
          )}
        </div>
      );
    }
  }
}

export default Auth;
