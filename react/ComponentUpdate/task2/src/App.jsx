import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog.jsx';

class App extends Component {
  state = {
    isOpen: false,
  };
  // eslint-disable-next-line class-methods-use-this

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show
        </button>
        <Dialog isOpen={this.state.isOpen} onClose={this.hideDialog} title="some title">
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
