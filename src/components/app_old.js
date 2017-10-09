import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
// import ScrollArea from './scroll_area';
import Nav from './nav';
import CardList from '../containers/card_list';
import BookDetail from '../containers/active_book'
// import ButtonFilterCategory from '../containers/button_filter_category'
import SortBar from '../containers/SortBar'
import Filters from '../containers/filters'
import CardItemDetail from '../containers/card_list_item_cell'
import ShowCellContainer from '../containers/ShowColumnContainer'
// import ScrollArea from './scroll_area';
// import SimpleExample from './simple_example'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  // le seguenti 3 funzioni servono per ridimensionare correttamente le barre
  // di scorrimento. dimensione del viewport tramite this.state
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  // <BookDetail />
  render() {
    // console.log(window.innerHeight);
    const altezzaHeader = 60+80+72
    // let {'cacca', 'pipi', {key1: 1, key2: 2}} = this.eventPreviousValues;
    // console.log('merda');
    return (
      <div>
        <Nav />
        <div>
          <ShowCellContainer />
        </div>
        <div className='list-group-item col-sm-12'>
          <Filters />
        </div>
        {// ScrollArea esterna solo orizzontale
        }
        <ScrollArea
        vertical = { false }
        stopScrollPropagation = { false }
        style = {{
          border: '1px solid red',
          touchAction: 'manipulation',
        }}
        contentStyle = {{
          width: '3500px',
          // height: '300px',
        }}
        horizontalContainerStyle = {{
          opacity: '.6',
          height: '16px',
          borderRadius: '100px',
          backgroundColor: '#eee',
          backdropFilter: 'blur(2px)',
          marginRight: '30px',
          width: `${window.innerWidth-(16*4)}px`,
          position: 'fixed',
          bottom: '16px',
          left: '16px',
        }}
        horizontalScrollbarStyle = {{
          backgroundColor: '#aaa',
          borderRadius: '100px',
          opacity: '1',
          height: '16px',
        }}
        >
        <div className='list-group-item col-sm-12'>
          <SortBar />
        </div>
          {// ScrollArea interna solo verticale
          }
          <ScrollArea
            style = {{
              background: 'grey',
              border: '1px solid blue',
              height: `${window.innerHeight-altezzaHeader}px`,
            }}
            contentStyle = {{
              height: '2000px',
              backgroundColor: '#f4f4f4'
            }}
            smoothScrolling = { false }
            horizontal = { false }
            verticalContainerStyle = {{
              position: 'fixed',
              top: `${ altezzaHeader + 16 }px`, //h nav, filters, SortBar + 16px margin
              right: '16px',
              height: `${window.innerHeight-altezzaHeader-32}px`,
              opacity: '.6',
              width: '16px',
              borderRadius: '100px',
              backgroundColor: '#eee',
              backdropFilter: 'blur(2px)',
            }}
            verticalScrollbarStyle = {{
              backgroundColor: '#aaa',
              borderRadius: '100px',
              opacity: '1',
              width: '16px',
            }}
            stopScrollPropagation = { false }
            >
            <CardList />
          </ScrollArea>
        </ScrollArea>

      </div>
    );
  }
}
// <SimpleExample></SimpleExample>

// vertical = { true }
// const scrollAreaStyle = {
//   // height: '2000px',
//   // width: '100%',
//
//   // height: `${App.state.height-altezzaHeader}px`,
//   // overflow: 'hidden',
// }
//
// const scrollContentStyle = {
//   // width: '1600px',
//
// }
//
// const verticalContainerStyle={
// }
//
// const verticalScrollbarStyle = {
// }
//
// const horizontalContainerStyle={
//
// }
//
// const horizontalScrollbarStyle = {
//
// }


// <h4>hide </h4>
// <div style={{display: 'flex'}}>
// <ButtonFilterCategory categoria='development'/>
// <ButtonFilterCategory categoria='action'/>
// <ButtonFilterCategory categoria='comedy'/>
// </div>
