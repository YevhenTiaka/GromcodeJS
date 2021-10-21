import React from 'react';
import { UserContext } from './user-context';

class ThemedButton extends React.Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">{this.context.name}</span>
        <img {...this.context.avatar_url} />
      </div>
    );
  }
}

ThemedButton.contextType = UserContext;
export default ThemedButton;
