import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <>
        <Login />
        <Logout />
        <Spinner />
      </>
    );
  }
}
export default App;
