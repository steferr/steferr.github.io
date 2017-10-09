import React from 'react';
import {Motion, spring} from 'react-motion';

export default class MotionTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  render() {

    const demo0Block = {
      position: 'absolute',
      width: '50px',
      height: '50px',
      borderRadius: '4px',
      backgroundColor: 'rgb(130, 181, 198)',
      x: spring(this.state.open ? 400 : 0),
    }

    const demo0 = {
      borderRadius: '4px',
      backgroundColor: 'rgb(240, 240, 232)',
      position: 'relative',
      margin:' 5px 3px 10px',
      height:' 50px',
      width: spring(this.state.open ? 1000 : 450)
    }

    const motionStyle = {demo0, demo0Block}
    console.log(motionStyle);
    console.log(motionStyle.demo0Block.x);
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Motion style={motionStyle}>
          {({interpolatedMotionStyle}) => {
            <div>
            <div style = {Object.assign({}, interpolatedMotionStyle.demo0, { width: `${interpolatedMotionStyle.demo0.width}px`})} />
            <div style={Object.assign( {}, interpolatedMotionStyle.demo0Block, { left: `${interpolatedMotionStyle.demo0Block.x}px` })} />
            </div>

            // children is a callback which should accept the current value of
            // `style`
            // {console.log(motionStyle)}

          }}
        </Motion>
      </div>
    );
  };
}
// <div style={motionStyle.demo0}>
// </div>

// <div></div>
