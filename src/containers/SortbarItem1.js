import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortBy } from '../actions/index'
import HideColumn from './HideColumn'
import SortIcon from '../components/SortIcon'
import { GREY_MEDIUM } from '../utilities/constants'

const SortBarItem1 = (props) => {
  if (props.hiddenColumns.includes(props.columnID))
    return <div></div>
  else {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: props.width,
      userSelect: 'none',
      borderRight: `1px solid ${GREY_MEDIUM}`
    }}>

      <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div
        style={Object.assign({cursor: 'pointer'}, props.style, children)}
        onClick={() => {
          // props.sortBy(props.contentType)
          props.sortBy(props.columnID, props.contentType)
          // console.log(props.contentType);
          // mandare un'azione con contenuto diverso a seconda del contenuto
        }}
        >
        {props.title}
        </div>
        <SortIcon {...props}></SortIcon>
      </div>

      <div style={children}>
        <HideColumn columnID={props.columnID} label={'hide'}/>
      </div>

    </div>
  )}

}
// export default SortBarItem

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sortBy : sortBy,
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    hiddenColumns: state.hiddenColumns,
    sortedBy: state.sortedBy,
    isDescendant: state.isDescendant
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SortBarItem1)

const children = {
  alignSelf: 'center',
}


SortBarItem1.propTypes = {
  title: PropTypes.string,
  contentType: PropTypes.string,
  // status: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string,

};
