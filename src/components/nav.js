import React, { Component } from 'react';
import FilterItem from '../containers/FilterItem'
import { GREY_MEDIUM } from '../utilities/constants'
import { primaryButtonStyle, primaryButtonHoverStyle } from '../utilities/styles'
  // onTouchStart={this.handleTouchStart.bind(this)}
  const Nav = (props) => {
    // let {cacca} = {tette: 'culo', merda: 'vagina'}
    // console.log(cacca);
    // onTouchStart = {(e)=>{console.log('start')}}
    // onTouchEnd = {(e)=>{console.log(e)}}
    // onTouchMove = {(e)=>{console.log('move')}}
    // onTouchMove = {(e)=>{console.log(e)}}
  const menuItemStyle = {
    fontSize: '12px',
    marginRight: '16px',
  }
  return (
    <div style = {{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '20',
    top: '0px',
    // left: '0px',
    width: '100%',
    height: '60px',
    background: '#fff',
    borderBottom: `1px solid ${GREY_MEDIUM}`
    // background: 'green',
    // padding: '0px 16px', //problemi con paddinx dx
    }}
    >
      <img src="../../resources/images/logo_cccompare.svg" alt="Crypto Cards Compared" style={{marginLeft: '16px',}}/>

      <div style={{display: 'flex', alignItems: 'center', marginRight: '16px'}}>
        <div style={menuItemStyle}>About</div>
        <div style={primaryButtonStyle}>Support</div>
      </div>
    </div>
  )
}

export default Nav
