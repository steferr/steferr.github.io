import React, { Component } from 'react';
import HideColumn from './HideColumn'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filterBy } from '../actions/index'
import { Motion, spring } from 'react-motion'
import { buttonFiltersStyle, buttonFiltersActiveStyle } from '../utilities/styles'
import { PRIMARY, PRIMARY_DARKER } from '../utilities/constants'
// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { selectBook } from '../actions/index';



class FilterItem extends Component {
  constructor(props) {
    super(props)
    // this.getStyle = this.getStyle.bind(this)
    this.state = {
      active: false
    }
  }
  // console.log(props.keyToFilter);
  // console.log(props.keyToFilter);
  // getStyle() {
  //   var active = {background: '#FED678'}
  //   if (this.state.active)
  //     return active
  //   else return {background: '#e5e5e5'}
  // }
  updateState() {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    // console.log(this.state.active);
    // console.log(buttonFiltersStyle);
    // console.log(buttonFiltersActiveStyle);
    // console.log(this.state.active);
    const statico = this.state.active ? buttonFiltersActiveStyle : buttonFiltersStyle
    // const animationPreset = { stiffness: 300, damping: 12 }
    const dinamico = {
      fontSize: this.state.active ? spring(12) : spring(12),
    }
    // console.log(this.props.activeFilters);
    return (
      <div
      onClick={()=>{
        this.props.filterBy(this.props.keyToFilter, this.props.valueToFilter)
        this.updateState()
      }}>

      <Motion style={dinamico}>
        {(interpolatedStyle) => {
          return(
              <div style={Object.assign( {}, statico, {
                fontSize: `${interpolatedStyle.fontSize}px`,
              })}>
                {this.props.label}
              </div>
          )
        }}
      </Motion>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    // state : state
    activeFilters: state.activeFilters
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({filterBy: filterBy}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem)


FilterItem.PropTypes = {
  filterType: PropTypes.string,
}



// <div
// style={Object.assign({}, normal, this.getStyle())}
// onClick={()=>{
//   this.props.filterBy(this.props.keyToFilter, this.props.valueToFilter)
//   this.updateState()
// }}>
// {this.props.label}
