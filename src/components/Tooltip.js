import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Motion, spring} from 'react-motion'

const Tooltip = (props) => {
  // console.log('this.props');
  // console.log(props.content);
  // console.log(props.isVisible);
  const statico = {
    background: '#282C34',
    padding: '10px',
    color: '#F6F9FA',
    borderRadius: '8px',
    position: 'absolute',
    maxWidth: '150px',
    fontSize: '12px',
    display: props.isVisible ? 'block' : 'none' 
  }
  const animationPreset = { stiffness: 600, damping: 25 }
  const dinamico = {
    opacity: props.isVisible ? spring(1) : spring(0),
    // fontSize: props.isVisible ? spring(12, animationPreset) : spring(0, animationPreset)
    // width: props.isVisible ? spring(100, animationPreset) : spring(0, animationPreset)
  }
  return (
    <div>
      <Motion style={dinamico}>
        {(interpolatedStyle) => {
          // console.log(interpolatedStyle);
          return(
              <div style={Object.assign( {}, statico, {
                opacity: `${interpolatedStyle.opacity}`,
                // width: `${interpolatedStyle.width}px`,
                // fontSize: `${interpolatedStyle.fontSize}px`,
              })}>
                {props.content}
              </div>
          )
        }}
      </Motion>
    </div>
  )

}

export default Tooltip

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
}
