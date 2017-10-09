import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import CardListItem from './CardListItem';
import { GREY_LIGHT } from '../utilities/constants'

class CardList extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleChange = this.handleChange.bind(this)
  //   this.listenScrollEvent = this.listenScrollEvent.bind(this)
  //   // console.log(this.refs.cardList.getDOMNode.getBoundingClientRect());
  //   this.state = {
  //     offsetX: 0,
  //     offsetY: 0,
  //   }
  // }
  // componentDidMount() {
  //   // ReactDOM.findDOMNode(this.refs.cardList).addEventListener('scroll', this.listenScrollEvent);
  //   window.addEventListener('scroll', this.listenScrollEvent);
  //
  //   console.log(ReactDOM.findDOMNode(this.refs.cardList).getBoundingClientRect().x); //ok
  //   // console.log(ReactDOM.findDOMNode(this.refs.cardList)); //ok
  //   console.log('componentDidMount');
  // }
  //
  // componentWillUnmount() {
  //     ReactDOM.findDOMNode(this.refs.cardList).removeEventListener('scroll', this.listenScrollEvent);
  //     console.log('componentWillUnmount');
  // }

  renderList() {
    // console.log('- - - - cardList - - - ');
    return this.props.visibleCards.map((card, index) => {
      // console.log(card.cardID);
      if (this.props.hiddenColumns.indexOf(card.columnID) == -1) {
        // const isEven = (i) => { return index % 2 == 0 }
        // // console.log(isEven(index));

        return (
          <CardListItem
            offsetY = {this.props.offsetY}
            key = { card.cardID }
            card = {card}
            onClick = { () => this.props.selectedBook(card) }
            isEven = { index % 2 == 0 }
          />
        )
      }
      else
        return (<div key = {card.cardID}></div>)
    })
  }
  listenScrollEvent() {
    // console.log(ReactDOM.findDOMNode(this.refs.cardList));
    console.log('scrollato');
    // console.log(this.refs.cardList.getBoundingClientRect());
    // console.log(this.refs.cardList.getBoundingClientRect());

  }
  // ReactDOM
  //  console.log(.findDOMNode(this.refs['cardList']));
  //  .findDOMNode(this.refs['cardList'])
  //  .getBoundingClientRect(); //outputs <h3> coordinates
  // ref = {'cardList'}
  // onScroll={this.listenScrollEvent()}

  render() {
    // console.log('- - - CardList- - - ');
    // console.log(this.props.state);
    // console.log(this.props.visibleCards);
    // console.log(this.props.hiddenColumns);
    // console.log(this.props.state.visibleCards);
    // console.log(this.props.state.activeFilters);
    return (
      <div
        style = {{
          height: '2400px',
          width: '4200px',
          position: 'relative',
          top: '132px',
          zIndex: '-1',
          backgroundColor: GREY_LIGHT,
          // paddingTop: '16px',
        }}
      >
        <ul
          style = {{
            padding: 0,
        }}>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

// Anything that comes out from this function ends up as props on the cardList container.
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers.
  // This happens through the dispatch function. bindActionCreators makes so that this happens.
  return bindActionCreators({selectedBook: selectBook}, dispatch)
}

// Whatever will return will show up as props inside of cardList.
function mapStateToProps(state) {
  return {
    cardList: state.cardList,
    visibleCards: state.visibleCards,
    state: state, //se lo tolgo non ordina più
    hiddenColumns: state.hiddenColumns
  }
}
// Promote cardList from a Component to a container. It needs to know about this
// new dispatch method, selectBook. Make it available as props.
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
