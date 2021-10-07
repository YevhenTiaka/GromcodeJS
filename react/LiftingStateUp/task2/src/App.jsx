import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart.jsx';
// eslint-disable-next-line import/no-unresolved
import Profile from './Profile.jsx';

class Page extends Component {
  state = {
    userDate: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      userDate: {
        ...this.state.userDate,
        [name]: value,
      },
    });
  };

  render() {
    const { userDate } = this.state;
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userDate.firstName} ${userDate.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={userDate.firstName} />
          <Profile userDate={userDate} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default Page;
