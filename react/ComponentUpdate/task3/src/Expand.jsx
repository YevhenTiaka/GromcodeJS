import React from 'react';

class Expand extends React.Component {
  state = {
    visible: false,
  };

  toggle = () =>
    !this.state.visible ? this.setState({ visible: true }) : this.setState({ visible: false });

  // eslint-disable-next-line class-methods-use-this
  render() {
    if (!this.state.visible) {
      return (
        <div className="expand border">
          <div className="expand__header">
            <span className="expand__title">{this.props.title}</span>
            <button className="expand__toggle-btn" onClick={this.toggle}>
              <i className="fas fa-chevron-up"></i>
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggle}>
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
        <div className="expand__content">{this.props.children}</div>
      </div>
    );
  }
}

export default Expand;
