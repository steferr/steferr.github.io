import React, { Component } from 'react';
import FilterItem from '../containers/FilterItem'
import Radium from 'radium'
import { filterTitleStyle } from '../utilities/styles'
import * as o from '../utilities/constants'

const Filters = (props) => {
  // console.log(filterTitleStyle);
  return (
    <div style = {{
      position: 'fixed',
      zIndex: '20',
      bottom: '0px',
      height: '80px',
      width: '100%',
      background: '#fff',
      borderTop: `1px solid ${o.GREY_MEDIUM}`
    }}>
    <div style={{height: '100%', display: 'flex', alignItems: 'center', }}>

      <div style={askjdfn}>
        <div>
          <h5 style={filterTitleStyle}>Card Type</h5>
        </div>
        <div style={{display: 'flex'}}>
          <FilterItem keyToFilter='cardType' valueToFilter = {o.PLASTIC} label='Plastic'/>
          <FilterItem keyToFilter='cardType' valueToFilter = {o.VIRTUAL} label='Virtual'/>
        </div>
      </div>

      <div style={askjdfn}>
        <div>
          <h5 style={filterTitleStyle}>Spending Currency</h5>
        </div>
        <div style={{display: 'flex'}}>
          <FilterItem keyToFilter='spendingCurrency' valueToFilter = {o.EUR} label='€'/>
          <FilterItem keyToFilter='spendingCurrency' valueToFilter = {o.USD} label='$'/>
          <FilterItem keyToFilter='spendingCurrency' valueToFilter = {o.GBP} label='£'/>
        </div>
      </div>

      <div style={askjdfn}>
        <div>
          <h5 style={filterTitleStyle}>Required Verification</h5>
        </div>
        <div style={{display: 'flex'}}>
          <FilterItem keyToFilter ='idRequired' valueToFilter = {false} label='None'/>
          <FilterItem keyToFilter ='idRequired' valueToFilter = {true} label='Id'/>
          <FilterItem keyToFilter ='addressRequired' valueToFilter = {true} label='Addr.'/>
        </div>
      </div>

      <div style={askjdfn}>
        <div>
          <h5 style={filterTitleStyle}>Crypto to FIAT at purch.</h5>
        </div>
        <div style={{display: 'flex'}}>
          <FilterItem keyToFilter ='instantCryptoPayment' valueToFilter = {false} label='No'/>
          <FilterItem keyToFilter ='instantCryptoPayment' valueToFilter = {true} label='Yes'/>
        </div>
      </div>

      <div style={askjdfn}>
        <div>
          <h5 style={filterTitleStyle}>Card Acceptance</h5>
        </div>
        <div style={{display: 'flex'}}>
        <FilterItem keyToFilter ='cardIssuer' valueToFilter = {o.MASTERCARD} label='MCard'/>
        <FilterItem keyToFilter ='cardIssuer' valueToFilter = {o.VISA} label='Visa'/>
        </div>
      </div>

    </div>
    </div>
  )
}

const askjdfn = {
  flexGrow: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // height: '100%',
  borderRight: `1px solid ${o.GREY_MEDIUM}`,
}

export default Filters
