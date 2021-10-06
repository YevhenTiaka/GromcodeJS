import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    let filterUsers = !this.state.value
      ? this.props.users
      : this.props.users.filter(
          ({ name }) => name.toLowerCase() === this.state.value.toLowerCase()
        );

    let users = filterUsers.map(({ id, name, age }) => (
      <User key={id} name={name} age={age} />
    ));

    return (
      <>
        <Filter
          filterText={this.state.value}
          onChange={this.handleChange}
          count={users.length}
        />
        <div className='users'>{users}</div>
      </>
    );
  }
}

export default UsersList;
