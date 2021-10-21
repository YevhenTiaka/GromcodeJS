import React from 'react';
import { UserContext } from './user-context';

class UserMenu extends React.Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">{this.context.name}</span>
        <img className="menu__avatar" src={this.context.avatar_url} />
      </div>
    );
  }
}

UserMenu.contextType = UserContext;
export default UserMenu;
