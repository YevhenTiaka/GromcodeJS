import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';
class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  mouseOn(color) {
    this.setState({
      color,
    });
  }
  mouseOff() {
    this.setState({
      color: null,
    });
  }
  render() {
    return (
      <div>
        <div className='picker__title'>{this.state.color}</div>
        <div>
          <button
            onMouseOver={() => this.mouseOn('Coral')}
            onMouseOut={() => this.mouseOff()}
            className='picker__button picker__button_coral'
          ></button>
          <button
            onMouseOver={() => this.mouseOn('Aqua')}
            onMouseOut={() => this.mouseOff()}
            className='picker__button picker__button_aqua'
          ></button>
          <button
            onMouseOver={() => this.mouseOn('Bisque')}
            onMouseOut={() => this.mouseOff()}
            className='picker__button picker__button_bisque'
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
