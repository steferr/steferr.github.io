import React from 'react';
import {Motion, spring, presets} from 'react-motion';
import TransitionMotionTest from './TransitionMotionTest'

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

  renderTransitionMotionTest() {
    // console.log(this.state.open);
    if( this.state.open ) {
      // return <TransitionMotionTest />
      return (<TransitionMotionTest></TransitionMotionTest>)
    }
    return (<div></div>)
  }

  render() {

    const thumb = {
      position: 'absolute',
      height: '50px',
      borderRadius: '4px',
      backgroundColor: 'rgb(130, 181, 198)',
    }

    const trail = {
      borderRadius: '4px',
      backgroundColor: 'rgb(240, 240, 232)',
      position: 'relative',
      margin:' 5px 3px 10px',
      height:' 50px',
    }
    const animationPreset = { stiffness: 300, damping: 16 }
    const motionStyle = {
      a:{
          thumbWidth: this.state.open ? spring( 100, animationPreset) : spring(50),
          thumbHeight: this.state.open ? spring( 100, animationPreset) : spring(50),
          thumbX: spring(this.state.open ? 400 : 0),
          thumbBorderRadius: this.state.open ? spring(400) : spring(4),
          width: this.state.open ? spring( 500, animationPreset) : spring(150),
        }
    }
    // console.log(motionStyle);
    // console.log(motionStyle.a);
    // console.log(this.renderTransitionMotionTest())
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>
        <Motion style={motionStyle.a}>
          {(interpolatedStyle) => {
            // console.log(interpolatedStyle);
            return(
              <div style = {Object.assign({}, trail, {width: `${interpolatedStyle.width}px`})}>
                <div style={Object.assign( {}, thumb, {
                  left: `${interpolatedStyle.thumbX}px`,
                  width: `${interpolatedStyle.thumbWidth}px`,
                  height: `${interpolatedStyle.thumbHeight}px`,
                  borderRadius: `${interpolatedStyle.thumbBorderRadius}px`,
                })}></div>
              </div>
            )
          }}
        </Motion>
        {this.renderTransitionMotionTest()}
      </div>
    );
  };
}
