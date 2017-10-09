import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SortBar from './SortBar';
import CardList from './CardList';

export default class ScrollContainer extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this)
    this.listenScrollEvent = this.listenScrollEvent.bind(this)
    this.listenTouchMove = this.listenTouchMove.bind(this)
    this.listenTouchStart = this.listenTouchStart.bind(this)
    this.listenTouchEnd = this.listenTouchEnd.bind(this)
    // console.log(this.refs.ScrollContainer.getDOMNode.getBoundingClientRect());
    this.state = {
      offsetX: 0,
      offsetY: 0,
    }
  }
  componentDidMount() {
    // ReactDOM.findDOMNode(this.refs.ScrollContainer).addEventListener('scroll', this.listenScrollEvent);
    window.addEventListener('scroll', this.listenScrollEvent);
    window.addEventListener('touchstart', this.listenTouchStart);
    window.addEventListener('touchend', this.listenTouchEnd);
    window.addEventListener('touchmove', this.listenTouchMove);
    // console.log(ReactDOM.findDOMNode(this.refs.ScrollContainer).getBoundingClientRect().x); //ok
    // console.log(ReactDOM.findDOMNode(this.refs.ScrollContainer)); //ok
    // console.log('componentDidMount');
  }

  componentWillUnmount() {
      ReactDOM.findDOMNode(this.refs.ScrollContainer).removeEventListener('scroll', this.listenScrollEvent);
      console.log('componentWillUnmount');
  }
  listenTouchStart() {
    // console.log('touchstart');
  }
  listenTouchMove() {
    console.log('touchmove');
    let offsetX = this.refs.ScrollContainer.getBoundingClientRect().left
    let offsetY = this.refs.ScrollContainer.getBoundingClientRect().top
    // console.log(this.refs.ScrollContainer.getBoundingClientRect());
    this.setState( ...this.state, { offsetX: offsetX, offsetY: offsetY } )
    // console.log(this.state.offsetX);
  }
  listenTouchEnd() {
    // console.log('touchend');
  }
  listenScrollEvent() {
    let offsetX = this.refs.ScrollContainer.getBoundingClientRect().left
    let offsetY = this.refs.ScrollContainer.getBoundingClientRect().top
    this.setState( ...this.state, { offsetX: offsetX, offsetY: offsetY } )
    // console.log(this.state.offsetX);
  }

  render() {
    // console.log(this.state.offsetX);
    return (
      <div ref = {'ScrollContainer'}
      style={{
        // border: '5px solid red',
        position: 'relative', //!
        zIndex: '10', //!
      }}>
        <SortBar offsetX = {this.state.offsetX} />
        <CardList offsetY = {this.state.offsetY} />
      </div>
    )
  }
}
