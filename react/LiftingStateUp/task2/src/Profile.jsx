import React from 'react';
import UserForm from './UserForm';

const Profile = ({ userDate, handleChange }) => (
  <div className="column">
    <UserForm userDate={userDate} handleChange={handleChange} />
  </div>
);

export default Profile;
