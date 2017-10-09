import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class cardList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      if (this.props.hiddenColumns.indexOf(book.category) == -1)
        return (
          <div key = {book.title}>
          <li
          className = "list-group-item"
          onClick = {() => this.props.selectedBook(book)}
          style={{cursor: 'pointer', display: 'block'}}
          >
            {book.title}
            <div className = "list-group-item" style={{fontSize: '13px', padding: '5px', margin: '10px 0px 0px 0px', textAlign: 'center'}}>
              {book.category}
            </div>
          </li>
          </div>
        )
      else
        return (<div key = {book.title}></div>)
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
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
function mapStateToProps(stato) {
  return {
    books: stato.books,
    hiddenColumns: stato.hiddenColumns
  }
}
// Promote cardList from a Component to a container. It needs to know about this
// new dispatch method, selectBook. Make it available as props.
export default connect(mapStateToProps, mapDispatchToProps)(cardList);
