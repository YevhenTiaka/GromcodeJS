import React from 'react';

const UserForm = ({ userDate, handleChange }) => (
  <form className="user-form">
    <input
      type="text"
      name="firstName"
      className="user-form__input"
      value={userDate.firstName}
      onChange={handleChange}
    />
    <input
      type="text"
      name="lastName"
      className="user-form__input"
      value={userDate.lastName}
      onChange={handleChange}
    />
  </form>
);

export default UserForm;
