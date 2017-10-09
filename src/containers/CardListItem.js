import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import CardItemDetail from './CardItemDetail'
import CardItemOverview from '../components/CardItemOverview'
// import {WORD, PARAGRAPH, NUMBER, PRICE, TIME, TICK} from '../utilities/constants'
import * as o from '../utilities/constants'
import PropTypes from 'prop-types'
import {GREY_LIGHT} from '../utilities/constants'


// import ButtonFilterCategory from '../containers/button_filter_category'



// <CardItemDetail
// cellClass={'cardIssuer'}
// columnID = uguale ad una delle costanti
// contentType={WORD}
// content={this.props.cardIssuer}
// visible={true}
// style={Object.assign({}, interni, pagine)}
// />

class CardListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      y: 0
    }
  }
  componentDidMount() {
    // console.log(ReactDOM.findDOMNode(this.refs.listItem).getBoundingClientRect());
    this.setState({
      y: ReactDOM.findDOMNode(this.refs.listItem).getBoundingClientRect().top
    })
  }
  getContent_PREPAID_OR_INSTANT_CRYPTO() {
    if (this.props.card.instantCryptoPayment)
      return 'Instant Crypto Payment'
    else return 'Prepaid Card'
  }
  getContent_VERIFICATION_TYPE() {
    if ( this.props.card.idRequired ) {
      if ( this.props.card.addressRequired ) {
        return 'Proof of ID & Address'
      }
      else {
        return 'Proof of ID'
      }
    }
    else {
      if ( this.props.card.addressRequired ) {
        return 'Proof of Address'
      }
      else return 'none'
    }
  }
  getContent_APP() {
    if (this.props.card.app_IOS) {
      if (this.props.card.app_Android) {
        if (this.props.card.app_Web) {
          return 'iOS, Android, Web App'
        }
        else return 'iOS, Android'
      }
      else {
        if (this.props.card.app_Web) {
          return 'iOS, Web App'
        }
        else return 'iOS'
      }
    }
    else {
      if (this.props.card.app_Android) {
        if (this.props.card.app_Web) {
          return 'Android, Web App'
        }
        else return 'Android'
      }
      else return 'Web App'
    }
  }
  getContent_CONNECTED_WALLETS(wallets) {
    var content = wallets[0]
    for ( var i = 1; i < wallets.length; i++ ) {
      content = `${content}, ${wallets[i]}`
    }
    return content
  }
  getContent_WALLETLOAD_TYPES(card, bankAccount, paypal, skrill, payeer) {
    if (card == false) var n_card = ''
      else var n_card = 'Credit Card, '
    if (bankAccount == false) var n_bankAccount = ''
      else var n_bankAccount = 'Bank Account, '
    if (paypal == false) var n_paypal = ''
      else var n_paypal = 'Paypal, '
    if (skrill == false) var n_skrill = ''
    var n_skrill = 'Skrill, '
    if (payeer == false) var n_payeer = ''
      else var n_payeer = 'Payeer'

    return `${n_card}${n_bankAccount}${n_paypal}${n_skrill}${n_payeer}`
  }
  formatPrice(price) {
    var formattedPrice = price
    if (price.includes('∞')) { formattedPrice = '∞'}
    if (price.includes(o.EUR)) { formattedPrice = price.replace(o.EUR, '€ ') }
    if (price.includes(o.USD)) { formattedPrice = price.replace(o.USD, '$ ') }
    if (price.includes(o.GBP)) { formattedPrice = price.replace(o.GBP, '£ ') }
    if (price.includes(o.BTC)) { formattedPrice = price.replace(o.BTC, '₿ ') }
    return formattedPrice
  }
  formatPercentage(percentage) {
    return `${percentage} %`
  }
  formatTick(bool) {
    if (bool) return 'yes'
    else return 'no'
  }
  formatTimeSpan(min, max) {
    return `${min} - ${max} days`
  }
  render() {
    // console.log(this.state);
    // console.log(this.getContent_PREPAID_OR_INSTANT_CRYPTO);
    const card = this.props.card
    // console.log(card.Purchases_Total_spending_month);
    const cardDetailContainerStyle = {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'left',
      // marginLeft: '150px',  //must be equal to length of cardOverview
      height: '100%',
      background: this.props.isEven ? GREY_LIGHT :'#fff',
      // border: '1px solid blue',
    }
    return (
        <div style={container} key ={card.cardID} onClick = {this.props.onClick}
         ref={'listItem'}
        >
          <CardItemOverview
          cardIssuer = { card.cardIssuer }
          offsetY = { this.props.offsetY }
          listItemYCoordinates = { this.state.y }
          spendingCurrency = { card.spendingCurrency }
          cardName = { card.cardName }
          company = { card.company }
          cardType = { card.cardType }
          {...this.props}
          />
          <div style={cardDetailContainerStyle}>
            <CardItemDetail
              columnID = {o.VERIFICATION_TYPE}
              contentType = {o.PARAGRAPH}
              content={this.getContent_VERIFICATION_TYPE()}
              style={Object.assign({}, interni, categoria)}
              width={'128px'}
            />

            <CardItemDetail
              columnID = {o.CARD_ISSUANCE_PRICE}
              contentType = {o.PRICE}
              content={this.formatPrice(card.cardIssuancePrice)}
              style={Object.assign({}, interni, categoria)}
              width={'128px'}
            />
            <CardItemDetail
            columnID = {o.ANNUAL_COST}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.annualFee)}
            style={Object.assign({}, interni, categoria)}
            width={'144px'}
            />
            <CardItemDetail
            columnID = {o.CURRENCY_CONVERSION}
            contentType = {o.PERCENTAGE}
            content = {this.formatPercentage(card.currencyConversion)}
            style={Object.assign({}, interni, categoria)}
            width={'168px'}
            />
            <CardItemDetail
            columnID = {o.ATM_DOMESTIC_WIDTHRAWAL_FEE}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.ATM_Domestic_Widthrawal_Fee)}
            style={Object.assign({}, interni, categoria)}
            width={'136px'}
            />
            <CardItemDetail
            columnID = {o.ATM_INTERNATIONAL_WITHDRAWAL_FEE}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.ATM_International_Withdrawal_Fee)}
            style={Object.assign({}, interni, categoria)}
            width={'136px'}
            />
            <CardItemDetail
            columnID = {o.CASH_BACK}
            contentType = {o.PERCENTAGE}
            content = {this.formatPercentage(card.cashBack)}
            style={Object.assign({}, interni, categoria)}
            width={'136px'}
            />
            <CardItemDetail
            columnID = {o.PIN_CHANGE}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.pinChange)}
            style={Object.assign({}, interni, categoria)}
            width={'136px'}
            />
            <CardItemDetail
              columnID = {o.APP}
              contentType = {o.PARAGRAPH}
              content={this.getContent_APP()}
              style={Object.assign({}, interni, categoria)}
              width={'136px'}
            />

            <CardItemDetail
            columnID = {o.TWO_FACTORS_AUTH}
            contentType = {o.TICK}
            content = {this.formatTick(card.twoFactorsAuth)}
            style={Object.assign({}, interni, categoria)}
            width={'136px'}
            />

            <CardItemDetail
            columnID = {o.CARD_DELIVERY_STD_TIME}
            contentType = {o.TIME}
            content = {this.formatTimeSpan(card.cardDeliveryStdTimeMin, card.cardDeliveryStdTimeMax)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.CARD_DELIVERY_STD_PRICE}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.cardDeliveryStdPrice)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />

            <CardItemDetail
            columnID = {o.CARD_DELIVERY_EXP_TIME}
            contentType = {o.TIME}
            content = {this.formatTimeSpan(card.cardDeliveryExpTimeMin, card.cardDeliveryExpTimeMax)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.CARD_DELIVERY_EXP_PRICE}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.cardDeliveryExpPrice)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />

            <CardItemDetail
            columnID = {o.CARD_REPLACEMENT_STD_PRICE}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.cardReplacementStdPrice)}
            style={Object.assign({}, interni, categoria)}
            width={'108px'}
            />

            <CardItemDetail
            columnID = {o.CARD_REPLACEMENT_EXP_PRICE}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.cardReplacementExpPrice)}
            style={Object.assign({}, interni, categoria)}
            width={'108px'}
            />

            <CardItemDetail
              columnID = {o.CONNECTED_WALLETS}
              contentType = {o.PARAGRAPH}
              content={this.getContent_CONNECTED_WALLETS(card.connectedWallets)}
              style={Object.assign({}, interni, categoria)}
              width={'160px'}
            />

            <CardItemDetail
              columnID = {o.WALLETLOAD_TYPES}
              contentType = {o.PARAGRAPH}
              content={this.getContent_WALLETLOAD_TYPES(
                card.WalletLoad_Card_available,
                card.WalletLoad_BankAccount_available,
                card.WalletLoad_Paypal_available,
                card.WalletLoad_Skrill_available,
                card.WalletLoad_Payeer_available,
              )}
              style={Object.assign({}, interni, categoria)}
              width={'128px'}
            />

            <CardItemDetail
            columnID = {o.ATM_TRANSACTIONNUMBER_24H}
            contentType = {o.NUMBER}
            content = {card.ATM_TransactionNumber_24h}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.ATM_TRANSACTIONNUMBER_MONTH}
            contentType = {o.NUMBER}
            content = {card.ATM_TransactionNumber_Month}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.ATM_TRANSACTIONNUMBER_YEAR}
            contentType = {o.NUMBER}
            content = {card.ATM_TransactionNumber_Year}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.ATM_TRANSACTIONNUMBER_LIFETIME}
            contentType = {o.NUMBER}
            content = {card.ATM_TransactionNumber_Lifetime}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />


            <CardItemDetail
            columnID = {o.PURCHASES_TOTAL_NUMBER_24H}
            contentType = {o.NUMBER}
            content = {card.Purchases_Total_number_24h}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.PURCHASES_TOTAL_NUMBER_MONTH}
            contentType = {o.NUMBER}
            content = {card.Purchases_Total_number_month}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.PURCHASES_TOTAL_NUMBER_YEAR}
            contentType = {o.NUMBER}
            content = {card.Purchases_Total_number_year}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.PURCHASES_TOTAL_NUMBER_LIFETIME}
            contentType = {o.NUMBER}
            content = {card.Purchases_Total_number_lifetime}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />


            <CardItemDetail
            columnID = {o.ATM_WITHDRAWALAMOUNT_SINGLE}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.ATM_WithdrawalAmount_Single)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.ATM_WITHDRAWALAMOUNT_24H}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.ATM_WithdrawalAmount_24h)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.ATM_WITHDRAWALAMOUNT_MONTH}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.ATM_WithdrawalAmount_Month)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.ATM_WITHDRAWALAMOUNT_YEAR}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.ATM_WithdrawalAmount_Year)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.ATM_WITHDRAWALAMOUNT_LIFETIME}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.ATM_WithdrawalAmount_Lifetime)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />

            <CardItemDetail
            columnID = {o.PURCHASES_TOTAL_SPENDING_SINGLE}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.Purchases_Total_spending_single)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.PURCHASES_TOTAL_SPENDING_24H}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.Purchases_Total_spending_24h)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.PURCHASES_TOTAL_SPENDING_MONTH}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.Purchases_Total_spending_month)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.PURCHASES_TOTAL_SPENDING_YEAR}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.Purchases_Total_spending_year)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />
            <CardItemDetail
            columnID = {o.PURCHASES_TOTAL_SPENDING_LIFETIME}
            contentType = {o.PRICE}
            content = {this.formatPrice(card.Purchases_Total_spending_lifetime)}
            style={Object.assign({}, interni, categoria)}
            width={'84px'}
            />





          </div>
        </div>
    )
  }
}
const container = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '80px',
  // margin: '8px 16px',
  margin: '0px',
  // borderRadius: '4px',
  boxShadow: '0px, 10px, 10px, #cccccc',
  // overflow: 'hidden',
  // cursor: 'pointer',
}

const interni = {
  // fontSize: '13px',
  // // padding: '14px',
  // margin: '0px 0px 0px 0px',
  // textAlign: 'center',
  // // border: '1px solid red',
}

const titolo = {
  fontSize: '18px',
  color: '#333',
  fontWeight: 'bold',
}

const categoria = {
}

const pagine = {
}
// // Anything that comes out from this function ends up as props on the cardList container.
// function mapDispatchToProps(dispatch) {
//   // Whenever selectBook is called, the result should be passed to all of our reducers.
//   // This happens through the dispatch function. bindActionCreators makes so that this happens.
//   return bindActionCreators({selectedBook: selectBook}, dispatch)
// }
//
// // Whatever will return will show up as props inside of cardList.
// function mapStateToProps(stato) {
//   return {
//     books: stato.books,
//     hiddenColumns: stato.hiddenColumns
//   }
// }
// Promote cardList from a Component to a container. It needs to know about this
// new dispatch method, selectBook. Make it available as props.
// export default connect(mapStateToProps, mapDispatchToProps)(cardListItem);
export default CardListItem


CardListItem.propTypes = {
  isEven: PropTypes.bool.isRequired
}







// <CardItemDetail
// columnID = {o.SPENDING_CURRENCY}
// contentType = {o.WORD}
// content={card.spendingCurrency}
// style={Object.assign({}, interni, categoria)}
// />




// <CardItemDetail
// cellClass={'cardIssuer'}
// columnID =
// contentType={WORD}
// content={this.props.cardIssuer}
// visible={true}
// style={Object.assign({}, interni, pagine)}
// />
// <CardItemDetail
// cellClass={'pages'}
// columnID =
// contentType={WORD}
// content={this.props.pages}
// visible={true}
// style={Object.assign({}, interni, pagine)}
// />
// <CardItemDetail
// cellClass={'category'}
// columnID =
// contentType={WORD}
// content={this.props.category}
// visible={true}
// style={Object.assign({}, interni, categoria)}
// />
// <CardItemDetail
// cellClass={'price'}
// contentType={PRICE}
// content={this.props.price}
// visible={true}
// style={Object.assign({}, interni, pagine)}
// />
// <div style={container} key ={this.props.title} onClick = { this.props.onClick}
// >
//   <div style={Object.assign({}, interni, titolo)}>
//     {this.props.title}
//   </div>
//   <div style={Object.assign({}, interni, categoria)}>
//     {this.props.category}
//   </div>
//   <div style={Object.assign({}, interni, pagine)}>
//     {this.props.pages}
//   </div>
// </div>
