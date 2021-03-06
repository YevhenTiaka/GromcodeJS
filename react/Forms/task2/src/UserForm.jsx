import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    name: '',
    student: '',
    occupation: '',
    about: '',
  };

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    const val = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: val,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className='login-form' onSubmit={this.onSubmit}>
        <h1 name='form-title'>Profile</h1>
        <div className='form-control'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input
            className='form-input'
            type='text'
            id='name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className='form-control'>
          <label className='form-label' htmlFor='student'>
            Student
          </label>
          <input
            className='form-input'
            type='checkbox'
            id='student'
            name='student'
            value={this.state.student}
            onChange={this.handleChange}
          />
        </div>
        <div className='form-control'>
          <label className='form-label' id='occupation' htmlFor='occupation'>
            Occupation
          </label>
          <select
            value={this.state.occupation}
            name='occupation'
            className='form-input'
            onChange={this.handleChange}
          >
            <option value='london'>London</option>
            <option value='new-york'>New York</option>
            <option value='sidney'>Sidney</option>
            <option value='berlin'>Berlin</option>
          </select>
        </div>
        <div className='form-control'>
          <label className='form-label' id='about' htmlFor='about'>
            About
          </label>
          <textarea
            name='about'
            value={this.state.about}
            onChange={this.handleChange}
            className='form-input'
          />
        </div>
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
