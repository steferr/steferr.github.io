import React, { Component } from 'react';
import ArrowDown from '../../resources/icons/ic-arrow-drop-down-18px.svg'
const SortIcon = (props) => {
  // console.log('this.props');
  // console.log(props);
  if (props.sortedBy == props.columnID && !props.isDescendant)
    return (
      <div>
      <img src="../../resources/icons/ic-arrow-drop-down-18px.svg" alt=""/>
      </div>
    )
  if (props.sortedBy == props.columnID && props.isDescendant)
  return (
    <div>
    <img src="../../resources/icons/ic-arrow-drop-up-18px.svg" alt=""/>
    </div>
  )
  // <ArrowDown />
  return (
    <div style={{opacity: '.2'}}>
    <img src="../../resources/icons/ic-arrow-drop-down-18px.svg" alt=""/>
    </div>
  )

}

export default SortIcon
