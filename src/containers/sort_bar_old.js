import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortByNameAsc, sortByNameDes } from '../actions/index'

class SortBar extends Component {
  render() {
    return(
      <div style={container}>
        <div
          onClick={() => {
            if (this.props.sortedBy === 'NAME_ASC')
              this.props.sortByNameDes()
            else
              this.props.sortByNameAsc()
          }}
        >
          <h6>Title</h6>
        </div>
        <div><h6>Category</h6></div>
        <div><h6>Pages</h6></div>

      </div>
    )
  }
}

const container = {
  cursor: 'pointer',
  width: '100%',
  border: '1px solid #e5e5e5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  margin: '8px',
  backgroundColor: '#fff',
  borderRadius: '4px',
  boxShadow: '0px, 10px, 10px, #cccccc'
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sortByNameAsc : sortByNameAsc,
    sortByNameDes : sortByNameDes,
  }, dispatch)
}

function mapStateToProps(state) {
  return {cardList: state.cardList, sortedBy: state.sortedBy}
}
export default connect(mapStateToProps, mapDispatchToProps)(SortBar)
