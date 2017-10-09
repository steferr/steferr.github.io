import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { sortByNameAsc, sortByNameDes } from '../actions/index'
import SortBarItem1 from './SortBarItem1'
import SortBarItem2 from './SortBarItem2'
import SortBarItem4 from './SortBarItem4'
import SortBarItem5 from './SortBarItem5'
import * as o from '../utilities/constants'

class SortBar extends Component {

  render() {
    // console.log(this.state);
    const container = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'fixed',
      top: '60px',
      left: this.props.offsetX,
      width: '4200px',
      height: '72px',
      borderRadius: '4px',
      backgroundColor: '#fff',
      border: '1px solid #e5e5e5',
      boxShadow: '0px, 10px, 10px, #cccccc',
      fontSize: '14px',
    }
    const item = {
      fontSize: '12px',
      fontWeight: '500',
      // width: '148px',
      textTransform: 'uppercase',
      letterSpacing: '.8px',
      // margin: '0px 30px',
    }
    // console.log(WORD);
    return(
      <div style={container}>
        <div style = {{width: '160px', textAlign: 'center'}}>
          Card Overview
        </div>

        <SortBarItem1
          columnID={o.VERIFICATION_TYPE}
          contentType={o.PARAGRAPH}
          title = 'Verification'
          style={ item }
          width = {'128px'}
          sortable = { false }
        />

        <SortBarItem1
          columnID={o.CARD_ISSUANCE_PRICE}
          contentType={o.PRICE}
          title = 'Card Cost'
          style={item}
          width = {'128px'}
          sortable = { true }
        />

        <SortBarItem1
          columnID={o.CARD_ISSUANCE_PRICE}
          contentType={o.PRICE}
          title = 'Annual Cost'
          style={item}
          width = {'144px'}
          sortable = { true }
        />

        <SortBarItem1
          columnID={o.CARD_ISSUANCE_PRICE}
          contentType={o.PRICE}
          title = 'Curr. Exchange'
          style={item}
          width = {'168px'}
          sortable = { true }
        />

        <SortBarItem2
          columnID='delivery_express'
          groupTitle = 'ATM Withdrawal Fee'
          columnID1 = {o.CARD_DELIVERY_STD_TIME_MAX}
          contentType1={o.TIME}
          title1 = 'Domestic'
          columnID2 = {o.CARD_DELIVERY_STD_PRICE}
          contentType2={o.PRICE}
          title2 = 'International'
          style={item}
          width={'272px'}
        />

        <SortBarItem1
          columnID={o.CARD_ISSUANCE_PRICE}
          contentType={o.PRICE}
          title = 'Cash Back'
          style={item}
          width = {'136px'}
          sortable = { true }
        />

        <SortBarItem1
          columnID={o.CARD_ISSUANCE_PRICE}
          contentType={o.PRICE}
          title = 'Pin Change'
          style={item}
          width = {'136px'}
          sortable = { true }
        />

        <SortBarItem1
          columnID={o.CARD_ISSUANCE_PRICE}
          contentType={o.PRICE}
          title = 'Mobile App'
          style={item}
          width = {'136px'}
          sortable = { true }
        />

        <SortBarItem1
          columnID={o.CARD_ISSUANCE_PRICE}
          contentType={o.PRICE}
          title = '2 F.Auth'
          style={item}
          width = {'136px'}
          sortable = { true }
        />

        <SortBarItem2
          columnID='delivery_standard'
          groupTitle = 'Std. Delivery'
          columnID1 = {o.CARD_DELIVERY_STD_TIME_MAX}
          contentType1={o.TIME}
          title1 = 'Time'
          columnID2 = {o.CARD_DELIVERY_STD_PRICE}
          contentType2={o.PRICE}
          title2 = 'Cost'
          style={item}
          width={'168px'}
        />

        <SortBarItem2
          columnID='delivery_express'
          groupTitle = 'Exp. Delivery'
          columnID1 = {o.CARD_DELIVERY_EXP_TIME_MAX}
          contentType1={o.TIME}
          title1 = 'Time'
          columnID2 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType2={o.PRICE}
          title2 = 'Cost'
          style={item}
          width={'168px'}
        />

        <SortBarItem2
          columnID='delivery_express'
          groupTitle = 'Card Replacement'
          columnID1 = {o.CARD_DELIVERY_EXP_TIME_MAX}
          contentType1={o.TIME}
          title1 = 'Standard'
          columnID2 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType2={o.PRICE}
          title2 = 'Express'
          style={item}
          width={'216px'}
        />

        <SortBarItem1
          columnID={o.CARD_ISSUANCE_PRICE}
          contentType={o.PRICE}
          title = 'Internal Wallets'
          style={item}
          width = {'160px'}
          sortable = { true }
        />

        <SortBarItem1
          columnID={o.CARD_ISSUANCE_PRICE}
          contentType={o.PRICE}
          title = 'Reload Types'
          style={item}
          width = {'128px'}
          sortable = { true }
        />

        <SortBarItem4
          columnID='delivery_express'
          groupTitle = 'Number of ATM Transactions'
          columnID1 = {o.CARD_DELIVERY_EXP_TIME_MAX}
          contentType1={o.TIME}
          title1 = '24h'
          columnID2 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType2={o.PRICE}
          title2 = 'Month'
          columnID3 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType3={o.PRICE}
          title3 = 'Year'
          columnID4 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType4={o.PRICE}
          title4 = 'Lifetime'
          style={item}
          width={'336px'}
        />

        <SortBarItem4
          columnID='delivery_express'
          groupTitle = 'Number of Purchases'
          columnID1 = {o.CARD_DELIVERY_EXP_TIME_MAX}
          contentType1={o.TIME}
          title1 = '24h'
          columnID2 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType2={o.PRICE}
          title2 = 'Month'
          columnID3 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType3={o.PRICE}
          title3 = 'Year'
          columnID4 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType4={o.PRICE}
          title4 = 'Lifetime'
          style={item}
          width={'336px'}
        />

        <SortBarItem5
          columnID='delivery_express'
          groupTitle = 'ATM Withdrawal Amount'
          columnID1 = {o.CARD_DELIVERY_EXP_TIME_MAX}
          contentType1={o.TIME}
          title1 = 'Single'
          columnID2 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType2={o.PRICE}
          title2 = '24h'
          columnID3 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType3={o.PRICE}
          title3 = 'Month'
          columnID4 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType4={o.PRICE}
          title4 = 'Year'
          columnID5 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType5={o.PRICE}
          title5 = 'Lifetime'
          style={item}
          width={'424px'}
        />

        <SortBarItem5
          columnID='delivery_express'
          groupTitle = 'Total Spending Amount'
          columnID1 = {o.CARD_DELIVERY_EXP_TIME_MAX}
          contentType1={o.TIME}
          title1 = 'Single'
          columnID2 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType2={o.PRICE}
          title2 = '24h'
          columnID3 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType3={o.PRICE}
          title3 = 'Month'
          columnID4 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType4={o.PRICE}
          title4 = 'Year'
          columnID5 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType5={o.PRICE}
          title5 = 'Lifetime'
          style={item}
          width={'424px'}
        />


      </div>
    )
  }
}


export default SortBar
