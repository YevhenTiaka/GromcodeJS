import React from 'react';
import moment from 'moment';

const Profile = (props) => {
  const age = props.birthDate;
  const formatDate = (date) => moment(date).format('DD MMM YY');
  const date = formatDate(props.userData.birthDate);

  return (
    <>
      <div className='profile__name'>{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className='profile__birth'>{`Was born ${date} in ${props.userData.birthPlace}`}</div>
    </>
  );
};

export default Profile;
