import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  onLogin = () => {
    this.setState({ isProcessing: true });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  onLogout = () => this.setState({ isLoggedIn: false });

  // eslint-disable-next-line class-methods-use-this
  render() {
    const { isLoggedIn, isProcessing } = this.state;

    if (isProcessing) {
      return <Spinner />;
    }

    return isLoggedIn ? <Logout onLogout={this.onLogout} /> : <Login onLogin={this.onLogin} />;
  }
}
export default Auth;
