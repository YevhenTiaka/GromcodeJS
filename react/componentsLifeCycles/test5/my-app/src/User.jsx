import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,

    };
  }

 render() {
   if(!this.state.user){
     return null;
   }
 return (
      <div className='user'>
        <img
          alt='User Avatar'
          src={this.state.user.avatar_url}
          className='user__avatar'
        />
        <div Name='user__info'>
          <span Name='user__name'>{this.state.user.name}</span>
          <span Name='user__location'>{this.state.user.location}</span>
        </div>
      </div>
    );
  }
} 

export default User;
