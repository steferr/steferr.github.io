import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowColumn from './ShowColumn';

class ShowCellContainer extends Component {
  constructor (props) {
    super(props)
    this.renderList = this.renderList.bind(this)
  }
  renderList() {
    return this.props.hiddenColumns.map((columnID) => {
      // // console.log('- - renderList');
      // // console.log(columnID);
      return (
        <ShowColumn
          columnID={columnID}
          label={columnID}
        />
      )
    })
  }

  // renderList() {
  //   return this.props.cardList.map((card) => {
  //       return (
  //         <CardListItem
  //           key = { card.title }
  //           columnID = { card.columnID }
  //           title = { card.title }
  //           pages = { card.pages }
  //           price = {card.price }
  //           category = { card.category }
  //           onClick = { () => this.props.selectedBook(card) }
  //         />
  //       )
  //   })
  // }

  render() {
    // console.log(' - - - ShowCellContainer - - - ');
    // console.log('this.props.hiddenColumns')
    // console.log(this.props.hiddenColumns)
    //hides the container when there are no hidden Cells
    if (this.props.hiddenColumns.length == 0)
      return <div></div>
    else {
    // console.log('this.renderList()');
    // console.log(this.renderList());
    // console.log('this.renderList');
    // console.log(this.renderList);
    return (
      <div style={showCellContainerStyle}>
      {this.renderList()}
      </div>
    )
    }
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({HideColumn: HideColumn }, dispatch)
}

function mapStateToProps(state) {
  return {
    hiddenColumns: state.hiddenColumns
  }
}

export default connect(mapStateToProps)(ShowCellContainer);

ShowCellContainer.propTypes = {
  columnID: PropTypes.string,
  label: PropTypes.string,
  // active: PropTypes.bool
};

const showCellContainerStyle = {
  position: 'fixed',
  zIndex: 20,
  bottom: '48px',
  right: '48px',
  backgroundColor: '#fff',
  border: '1px solid #eee',
  padding: '20px',

}
