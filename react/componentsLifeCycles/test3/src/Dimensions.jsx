import React from 'react';

class Dimesions extends React.Component {
  constructor(props) {
    super(props);
    const { innerWidth, innerHeight } = window;
    this.state = {
      width: innerWidth,
      height: innerHeight,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  onResize = (e) => {
    const { innerHeight, innerWidth } = e.target;
    this.setState({
      width: innerWidth,
      height: innerHeight,
    });
  };
  render() {
    return (
      <div className='dimensions'>{`${this.state.width}px - ${this.state.height}px`}</div>
    );
  }
}
export default Dimesions;
