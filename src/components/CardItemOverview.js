import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import PropTypes from 'prop-types';
// var color = require('color');
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { sortByNameAsc, sortByNameDes } from '../actions/index'
import * as o from '../utilities/constants'


import prefixAll from 'inline-style-prefixer/static'



// @Radium
class CardItemOverview extends Component {
  constructor(props) {
    super(props)
    this.getCompanyLogo = this.getCompanyLogo.bind(this)
    this.getCardIssuerLogo = this.getCardIssuerLogo.bind(this)
  }
  handleMouseHover() {
    return
  }
  getCompanyLogo() {
    switch (this.props.company) {
      case o.WIREX:
        return ('../../resources/images/logo_Wirex.svg')
    }
    // console.log('wirex');
    // return "../../resources/images/logo_Wirex.svg"
  }
  getCardIssuerLogo() {
    switch (this.props.cardIssuer) {
      case o.MASTERCARD:
        return ('../../resources/images/logo_mastercard.svg')
    }
  }
  render() {
    // console.log(this.props.cardType);
    const cardTypeStyle = {
      position: 'absolute',
      bottom: '8px',
      left: '8px',
      fontWeight: '500',
      fontSize: '12px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    }
    const currencyStyle = {
      position: 'absolute',
      top: '8px',
      right: '8px',
    }
    const companyStyle = {
      position: 'absolute',
      top: '8px',
      left: '8px',
      maxWidth: '88px',
      width: '100%',
      maxHeight: '24px',
      height: 'auto',
    }
    const cardIssuerStyle = {
      position: 'absolute',
      bottom: '8px',
      right: '8px',
      maxWidth: '30px',
      width: '100%',
      height: 'auto',
    }
    const style = {
      width: '160px',
      height: '100%',
      backgroundColor: this.props.isEven ? o.GREY_LIGHT : '#fff',
      boxShadow: '4px 0px 2px rgba(0,0,0,0.1)',
    }
    return(
    <div style={style}
      className = {'CardItemOverview'}
      onMouseOver= {()=>this.handleMouseHover()}
    >
      <img src={this.getCompanyLogo()} alt="" style={companyStyle}/>
      <img src={this.getCardIssuerLogo()} alt="" style={cardIssuerStyle}/>
      <p style={cardTypeStyle}>{this.props.cardType}</p>
      <p style={currencyStyle}>{this.props.spendingCurrency}</p>
    </div>
    )
  }
}

CardItemOverview.PropTypes = {
  cardIssuer: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  isEven: PropTypes.bool.isRequired,
}


// const prefixedStyle = prefixAll(style)
// the userAgent doesn't matter
// prefixedStyles === output
// const output = {
//   WebkitAlignItems: 'space-around',
//   msAlignItems: 'space-around',
//   alignItems: 'space-around',
//   // it also adds legacy properties and values
//   // by running every plugin available
//   WebkitBoxAlign: 'justify',
//   msFlexAlign: 'distribute',
// }


export default Radium(CardItemOverview)
