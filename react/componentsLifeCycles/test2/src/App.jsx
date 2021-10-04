import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <div className='clock'>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.visible && <Clock location={'New York'} offset={-5} />}
        {this.state.visible && <Clock location={'London'} offset={-2} />}
        {this.state.visible && <Clock location={'Kiev'} offset={0} />}
      </div>
    );
  }
}

export default App;
